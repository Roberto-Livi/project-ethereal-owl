import axios from "axios";
import _, { update } from "lodash";
import { updateUserWithMongoNotificationId } from "../users/users";

const localUrl = "http://localhost:3000";

export const createMongoDataObj = async() => {
  const response = await axios.post(`${localUrl}/api/notifications/new`, { notifications: [] });
  const transaction = await updateUserWithMongoNotificationId(response.data);
  return transaction;
}