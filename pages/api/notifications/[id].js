import clientPromise from "../../../lib/mongodb";
import { ObjectId } from "mongodb";


export const getNotification = async(id) => {
  const mongoClient = await clientPromise;

  const data = await mongoClient.db("MetaLiberation").collection("notifications").findOne({_id: new ObjectId(id)});

  return data;
}

export default async(req, res) => {
  const { id } = req.query;
  if (req.method === "PUT") {
    const mongoClient = await clientPromise;

    const data = await mongoClient
      .db("MetaLiberation")
      .collection("notifications")
      .updateOne({ _id: new ObjectId(id) }, { $set: { notifications: req.body.notifications } });

    return res.status(200).json(data);
  } else {
    const data = await getNotification(new ObjectId(id));

    if (!data) {
      res.status(404).json("Notification not found");
    }
    res.status(200).json({ notification: data });
  }
}