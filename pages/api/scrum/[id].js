import clientPromise from "../../../lib/mongodb";

export default async (req, res) => {
  try {
    const mongoClient = await clientPromise;
    const result = await mongoClient
      .db("MetaLiberation")
      .collection("scrum")
      .findOne({ projectId: req.query.id });
    return res.status(200).json({ success: true, data: result });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ success: false });
  }
};