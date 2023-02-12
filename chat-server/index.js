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
    methods: ["GET", "POST"]
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
    const { roomId, roomName, users, chatMessage } = data;
    const chatRoom = await collection.findOne({ roomId });
    if (!chatRoom) {
      await collection.insertOne({
        roomId,
        roomName,
        users,
        messages: [chatMessage]
      });
    }
  });

  socket.on("update-chat", async (data) => {
    const { roomId, message } = data;
    io.emit("receive-message", message);
    await collection.updateOne(
      { roomId },
      { $push: { messages: message } }
    );
  });
});

router.get(`/api/chat-rooms`, async (req, res) => {
  const { codename } = req.query;
  const chatRooms = await collection
    .find({
      users: { $in: [codename] }
    })
    .toArray();
  res.send(chatRooms);
});


router.get(`/api/chat-rooms/:roomId`, async (req, res) => {
  const roomId = req.params.roomId;
  const chatRoom = await collection.findOne({ roomId });
  res.send(chatRoom);
});


app.use(router);

server.listen(3001, () => {
  console.log("Server running on 3001");
});
