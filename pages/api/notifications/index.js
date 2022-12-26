import clientPromise from "../../../lib/mongodb";

export default async (req, res) => {
  const mongoClient = await clientPromise;

  const data = await mongoClient.db().collection("users").find().toArray();
  res.status(200).json({ notifications: JSON.parse(JSON.stringify(data)) });
}


    // let databody = {
    //   email: "liberationarmyfront0@hotmail.com",
    //   password: "password09090944",
    // };

    // await client
    //   .db()
    //   .collection("users")
    //   .insertOne(databody, (err, data) => {
    //     if (err) return console.log(err);
    //     console.log("saved to db: " + data);
    //   });

    // axios
    //   .get("http://localhost:3000/api/notifications")
    //   .then((resp) => console.log(resp.data));