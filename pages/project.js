import React, { useState, useEffect} from "react";
import { useSelector } from "react-redux";
import Layout from "../components/utilities/Layout";
import { getUserProject } from "../helpers/users/users";
import { Button, Dimmer, Loader } from "semantic-ui-react";


const Project = ({ projectId }) => {

  const [projectData, setProjectData] = useState({ projects: [], members: [], isMember: false});

  const walletAddress = useSelector((state) => state.manageData.walletAddress);

  const getProjectData = async() => {
    const data = await getUserProject(walletAddress, projectId);
    setProjectData(data);
  }

  const joinRequest = () => {
    // Make Request to join group
  }

  useEffect(() => {
    getProjectData();
  }, [walletAddress]);

  return (
    <Layout>
      <h1>Project ID: {projectId}</h1>
      <ol>
        {projectData.members.map((member) => (
          <li>{member.codename}</li>
        ))}
      </ol>
      {!projectData.isMember && (
        <Button color="violet" onClick={joinRequest}>
          Request to Join
        </Button>
      )}
    </Layout>
  );
}

Project.getInitialProps = (props) => {
  return { projectId: props.query.id };
};

export default Project;