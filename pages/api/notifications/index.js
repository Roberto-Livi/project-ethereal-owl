import clientPromise from "../../../lib/mongodb";

export default async (req, res) => {
  try {
    const mongoClient = await clientPromise;

    const data = await mongoClient.db("MetaLiberation").collection("notifications").find().toArray();
    res.status(200).json({ notifications: JSON.parse(JSON.stringify(data)) });
  } catch(err) {
    console.log(err.message);
  }
}

  //  axios
  //    .get("http://localhost:3000/api/notifications")
  //    .then((resp) => console.log(resp.data));