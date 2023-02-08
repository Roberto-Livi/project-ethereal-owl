import clientPromise from "../../../lib/mongodb";

export default async (req, res) => {
  try {
    const mongoClient = await clientPromise;

    const data = await mongoClient
      .db("MetaLiberation")
      .collection("messages")
      .find()
      .toArray();
    res.status(200).json({ notifications: JSON.parse(JSON.stringify(data)) });
  } catch (err) {
    console.log(err.message);
  }
};