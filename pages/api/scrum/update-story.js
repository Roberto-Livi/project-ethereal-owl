import clientPromise from "../../../lib/mongodb";

export default async (req, res) => {
  const { projectId, id, updatedFields } = req.body;

  try {
    const client = await clientPromise;
    const collection = client.db("MetaLiberation").collection("scrum");

    const result = await collection.updateOne(
      {
        projectId,
        "backlog.id": id
      },
      {
        $set: {
          "backlog.$.title": updatedFields.title,
          "backlog.$.description": updatedFields.description,
          "backlog.$.acceptanceCriteria": updatedFields.acceptanceCriteria,
          "backlog.$.storyPoints": updatedFields.storyPoints,
          "backlog.$.taskedTo": updatedFields.taskedTo,
          "backlog.$.status": updatedFields.status,
          "backlog.$.sprintStatus": updatedFields.sprintStatus,
        },
      }
    );

    if (result.modifiedCount !== 1) {
      return res
        .status(404)
        .json({ success: false, message: "Story not found" });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false });
  }
};
