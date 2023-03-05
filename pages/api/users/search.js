import clientPromise from "../../../lib/mongodb";

export default async (req, res) => {
  try {
    const mongoClient = await clientPromise;
    const users = await mongoClient
      .db("MetaLiberation")
      .collection("users")
      .find({
        codename: { $regex: "^" + req.query.searchTerm, $options: "i" },
      })
      .toArray();
    return res.status(200).json({ users, success: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false });
  }
}
