const express = require("express");
const router = express.Router();
const app = express();
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
const mongodb = require("mongodb");

app.use(cors());

const localUrl = "http://localhost:3000";
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: localUrl,
    methods: ["GET", "POST"],
  },
});

const uri =
  "mongodb+srv://roblivi:sI2rEiJe3V1n0Jav@cluster0.zkpln8x.mongodb.net/test?retryWrites=true&w=majority";
let client, collection;
mongodb.MongoClient.connect(
  uri,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error, mongoClient) => {
    if (error) throw error;
    client = mongoClient;
    collection = mongoClient.db("MetaLiberation").collection("messages");
    console.log("Connected to MongoDB");
  }
);

io.on("connection", async (socket) => {
  console.log(`User connected: ${socket.id}`);

  socket.on("disconnect", () => {
    console.log("User disconnected", socket.id);
  });

  socket.on("create-chat", async (data) => {
    const { roomId, userId1, userId2, chatMessage } = data;
    const chatRoom = await collection.findOne({ roomId, userId1, userId2 });
    if (!chatRoom) {
      await collection.insertOne({
        roomId,
        userId1,
        userId2,
        messages: [chatMessage]
      });
    }
  });

  socket.on("update-chat", async (data) => {
    const { roomId, userId1, userId2, message } = data;
    await collection.updateOne(
      { roomId, userId1, userId2 },
      { $push: { messages: message } }
    );
  });
});

router.get(`/api/chat-rooms`, async (req, res) => {
  const { userId } = req.query;
  console.log(userId)
  const chatRooms = await collection
    .find({
      $or: [{ userId1: userId }, { userId2: userId }]
    })
    .toArray();
  res.send(chatRooms);
});

app.use(router);

server.listen(3001, () => {
  console.log("Server running on 3001");
});
