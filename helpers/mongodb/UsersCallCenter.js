import axios from "axios";
import { debounce } from "lodash";

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

export const searchMongoCodename = async(searchTerm) => {
  let users = [];

  try {
    const response = await axios.get(
      `${localUrl}/api/users/search`, { params: { searchTerm } }
    );
    users = response.data.users;
  } catch(err) {
    console.log("Error: ", err.message);
  }

  return users;
}

export const getScrumUsers = async (addresses) => {
  try {
    const response = await axios.post(`${localUrl}/api/users/scrum-users`, {
      addresses
    });
    return response.data.users;
  } catch (err) {
    console.log("Error: ", err.message);
    return [];
  }
};
