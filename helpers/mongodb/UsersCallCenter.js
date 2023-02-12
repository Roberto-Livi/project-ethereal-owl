import axios from "axios";

const localUrl = "http://localhost:3000";

export const createMongoUserObj = async (codename, address) => {
  let successfulResponse = false;

  try {
    const response = await axios.post(`${localUrl}/api/users/new`, { codename, address });
    if(response) {
      successfulResponse = true;
    }
  } catch (err) {
    console.log("Error: ", err.message);
  }

  return successfulResponse;
};