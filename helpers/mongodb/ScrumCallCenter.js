import axios from "axios";

const localUrl = "http://localhost:3000";

export const getScrumboardByProjectId = async (projectId) => {
  try {
    const response = await axios.get(`${localUrl}/api/scrum/${projectId}`, { projectId });
    return response.data;
  } catch (err) {
    console.log("Error: ", err.message);
    return null;
  }
};

export const createScrumboard = async (project, walletAddress) => {
  let successfulResponse = false;

  try {
    const response = await axios.post(`${localUrl}/api/scrum/new`, {
      projectId: project.id,
      projectName: project.name,
      users: [walletAddress],
      backlog: [],
      completedSprints: []
    });
    successfulResponse = true;
  } catch (err) {
    console.log("Error: ", err.message);
    transaction = false;
  }

  return successfulResponse;
};

export const addToBacklog = async (projectId, story) => {
  let successfulResponse = false;

  try {
    const response = await axios.post(`${localUrl}/api/scrum/add-story`, {
      projectId,
      story
    });
    successfulResponse = true;
  } catch (err) {
    console.log("Error: ", err.message);
    successfulResponse = false;
  }

  return successfulResponse;
};

export const updateScrumStory = async (projectId, id, updateData) => {
  let successfulResponse = false;

  try {
    await axios.put(`${localUrl}/api/scrum/update-story`, {
      projectId,
      id,
      updateData,
    });
    successfulResponse = true;
  } catch (error) {
    console.error(error);
    return null;
  }

  return successfulResponse;
};
