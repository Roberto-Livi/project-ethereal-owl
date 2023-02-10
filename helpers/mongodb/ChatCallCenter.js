import axios from "axios";
import _ from "lodash";

const localUrl = "http://localhost:3001";


export const getChatRooms = async (userId) => {
  const response = await axios.get(`${localUrl}/api/chat-rooms`, { params: { userId } });
  return response.data;
}

export const getChatRoom = async (roomId, walletAddress) => {
  let data;

  try {
    const response = await axios.get(`${localUrl}/api/chat-rooms/${roomId}`);
    data = response.data;
  } catch(err) {
    console.log("Error: ", err.message);
  }

  return data;
}
