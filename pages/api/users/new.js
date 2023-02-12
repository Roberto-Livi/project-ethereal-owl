import clientPromise from "../../../lib/mongodb";

export default async (req, res) => {
  let successfulRequest = false;

  try {
    const mongoClient = await clientPromise;
    await mongoClient.db("MetaLiberation").collection("users").insertOne(req.body);
    successfulRequest = true;
  } catch (err) {
    console.log(err.message);
  }

  return successfulRequest;
};
