import clientPromise from "../../../lib/mongodb";
import { debounce } from "lodash";

export default debounce(async (searchTerm) => {
  try {
    const mongoClient = await clientPromise;
    const users = mongoClient
      .db("MetaLiberation")
      .collection("users")
      .find({
        codename: { $regex: "^" + searchTerm, $options: "i" },
      });
    return { users, success: true };
  } catch (error) {
    console.error(error);
    return { success: false };
  }
}, 500);
