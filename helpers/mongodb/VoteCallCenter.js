import axios from "axios";

const localUrl = "http://localhost:3000";

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
    const response = await axios.post(`${localUrl}/api/vote/add-vote`, {
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
