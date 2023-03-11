import clientPromise from "../../../lib/mongodb";

export default async (req, res) => {
  const { projectId, userAddress } = req.body;

  try {
    const mongoClient = await clientPromise;

    const result = await mongoClient
      .db("MetaLiberation")
      .collection("scrum")
      .updateOne({ projectId }, { $push: { users: userAddress } });

    if (result.modifiedCount === 1) {
      return res.status(200).json({ success: true });
    } else {
      return res
        .status(404)
        .json({ success: false, message: "Project not found" });
    }
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ success: false });
  }
};
