import axios from "axios";

const localUrl = "http://localhost:3000";

export const createScrumboard = async (project, walletAddress) => {
  let successfulResponse = false;

  try {
    const response = await axios.post(`${localUrl}/api/scrum/new`, {
      projectId: project.id,
      projectName: project.name,
      users: [walletAddress],
      sprints: [],
      backlog: []
    });
    successfulResponse = true;
  } catch (err) {
    console.log("Error: ", err.message);
    transaction = false;
  }

  return successfulResponse;
};
