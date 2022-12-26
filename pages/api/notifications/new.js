import clientPromise from "../../../lib/mongodb";

export default async (req, res) => {
  try {
    const mongoClient = await clientPromise;

    const response = await mongoClient
      .db("MetaLiberation")
      .collection("notifications")
      .insertOne(req.body);

    return res.status(200).json(response.insertedId);
  } catch (err) {
    console.log(err.message);
  }
};

//  .insertOne(databody, (err, data) => {
//         if (err) return console.log(err);
//         console.log("saved to db: " + data);
//       });