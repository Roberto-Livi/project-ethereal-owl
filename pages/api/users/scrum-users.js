import clientPromise from "../../../lib/mongodb";

export default async (req, res) => {
  try {
    const mongoClient = await clientPromise;
    const { addresses } = req.body;
    const users = await mongoClient
      .db("MetaLiberation")
      .collection("users")
      .find({
        address: { $in: addresses }
      })
      .toArray();
    return res.status(200).json({ users, success: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false });
  }
};
