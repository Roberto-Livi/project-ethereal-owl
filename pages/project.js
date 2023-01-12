import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../components/utilities/Layout";
import { getProject } from "../helpers/users/users";
import JoinRequest from "../components/projects/JoinRequest";
import PendingRequests from "../components/projects/PendingRequests";
import { updateCurrentProject } from "../store/actions";


const Project = ({ projectId }) => {

  const dispatch = useDispatch();

  const walletAddress = useSelector((state) => state.manageData.walletAddress);
  const projectData = useSelector((state) => state.manageData.currentProject);

  const getProjectData = async() => {
    const data = await getProject(walletAddress, projectId);
    dispatch(updateCurrentProject(data));
  }

  useEffect(() => {
    getProjectData();
  }, [walletAddress]);

  return (
    <Layout>
      <h1>Project ID: {projectId}</h1>
      <ol>
        {projectData.members.map((member, index) => (
          <li key={index}>{member.codename}</li>
        ))}
      </ol>
      { projectData.loaded && (
        projectData.isMember ? (
        <PendingRequests
          projectId={projectId}
          projectData={projectData}
        />
      ) : (
        <JoinRequest
          projectId={projectId}
          projectData={projectData}
        />
      ))
      }
    </Layout>
  );
}

Project.getInitialProps = (props) => {
  return { projectId: props.query.id };
};

export default Project;