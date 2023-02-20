import axios from "axios";

const localUrl = "http://localhost:3000";

export const createMongoProject = async (projectName) => {
  let successfulResponse = false;

  try {
    const response = await axios.post(`${localUrl}/api/projects/new`, { projectName });
    if (response) {
      successfulResponse = true;
    }
  } catch (err) {
    console.log("Error: ", err.message);
  }

  return successfulResponse;
};

export const searchMongoProjectName = async (searchTerm) => {
  let projects = [];

  try {
    const response = await axios.get(`${localUrl}/api/projects/search`, {
      params: { searchTerm }
    });
    projects = response.data.projects;
  } catch (err) {
    console.log("Error: ", err.message);
  }

  return projects;
};
