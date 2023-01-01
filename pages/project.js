import React, { useState, useEffect} from "react";
import { useSelector } from "react-redux";
import Layout from "../components/utilities/Layout";
import { getProject } from "../helpers/users/users";
import JoinRequest from "../components/projects/JoinRequest";
import PendingRequests from "../components/projects/PendingRequests";


const Project = ({ projectId }) => {

  const [projectData, setProjectData] = useState({ project: [], members: [], isMember: false, requests: [] });

  const walletAddress = useSelector((state) => state.manageData.walletAddress);

  const getProjectData = async() => {
    const data = await getProject(walletAddress, projectId);
    setProjectData(data);
  }

  useEffect(() => {
    getProjectData();
  }, [walletAddress]);

  return (
    <Layout>
      <h1>Project ID: {projectId}</h1>
      {console.log(projectData)}
      <ol>
        {projectData.members.map((member, index) => (
          <li key={index}>{member.codename}</li>
        ))}
      </ol>
      {projectData.isMember ? (
        <PendingRequests
          projectId={projectId}
          requests={projectData.requests}
        />
      ) : (
        <JoinRequest
          projectId={projectId}
          projectData={projectData}
        />
      )}
    </Layout>
  );
}

Project.getInitialProps = (props) => {
  return { projectId: props.query.id };
};

export default Project;