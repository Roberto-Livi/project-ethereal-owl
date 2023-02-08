import axios from "axios";
import _ from "lodash";

const localUrl = "http://localhost:3001";


export const getChatRooms = async (userId) => {
  const response = await axios.get(`${localUrl}/api/chat-rooms`, { params: { userId } });
  return response.data;
}
