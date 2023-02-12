import clientPromise from "../../../lib/mongodb";

export default async (req, res) => {
  try {
    const mongoClient = await clientPromise;
    await mongoClient.db("MetaLiberation").collection("users").insertOne(req.body);
    return res.status(200).json({ success: true });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ success: false });
  }
};
