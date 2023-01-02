import axios from "axios";
import _ from "lodash";
import { updateUserWithMongoNotificationId } from "../users/users";

const localUrl = "http://localhost:3000";

export const getUsersNotifications = async(mongoId) => {
  let successfulResponse = false;
  let data;

  try {
    const resp = await axios.get(`${localUrl}/api/notifications/${mongoId}`);
    data = resp.data.notification.notifications;
    successfulResponse = true;
  } catch(err) {
    console.log("Error: ", err.message);
  }

  return { data, successfulResponse};
}

export const addNotification = async(mongoId, notifications) => {
  let successfulResponse = false;

  try {
    await axios.put(`${localUrl}/api/notifications/${mongoId}`, { notifications });
    successfulResponse = true;
  } catch(err) {
    console.log("Error: ", err.message);
  }

  return successfulResponse;
}

export const createMongoDataObj = async(user) => {
  let transaction;

  try {
    const response = await axios.post(`${localUrl}/api/notifications/new`, {
      walletAddress: user.userAddress,
      codename: user.codename,
      notifications: [
        {
          message:
            "You have successfully subscribed to receiving notifications",
        },
      ],
    });
    transaction = await updateUserWithMongoNotificationId(response.data);
  } catch(err) {
    console.log("Error: ", err.message);
    transaction = false;
  }

  return transaction;
}