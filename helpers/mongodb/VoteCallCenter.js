import axios from "axios";

const localUrl = "http://localhost:3000";

export const createVoteSystem = async (project) => {
  let successfulResponse = false;

  try {
    await axios.post(`${localUrl}/api/vote/new`, {
      projectId: project.id,
      data: []
    });
    successfulResponse = true;
  } catch (err) {
    console.log("Error: ", err.message);
  }

  return successfulResponse;
};

export const getVoteDataByProjectId = async (projectId) => {
  try {
    const response = await axios.get(`${localUrl}/api/vote/${projectId}`, {
      projectId
    });
    return response.data;
  } catch (err) {
    console.log("Error: ", err.message);
    return null;
  }
};

export const addVoteData = async (projectId, voteData) => {
  let successfulResponse = false;

  try {
    await axios.post(`${localUrl}/api/vote/add-vote`, {
      projectId,
      voteData
    });
    successfulResponse = true;
  } catch (err) {
    console.log("Error: ", err.message);
    successfulResponse = false;
  }

  return successfulResponse;
};

export const updateVoteData = async (projectId, voteData) => {
  let successfulResponse = false;

  try {
    await axios.put(`${localUrl}/api/vote/update`, {
      projectId,
      voteData
    });
    successfulResponse = true;
  } catch (err) {
    console.log(err);
  }

  return successfulResponse;
};

export const deletePoll = async (projectId, pollId) => {
  let successfulResponse = false;

  try {
    await axios.post(`${localUrl}/api/vote/delete`, {
      projectId,
      pollId
    });
    successfulResponse = true;
  } catch (error) {
    console.error(error);
  }

  return successfulResponse;
};
