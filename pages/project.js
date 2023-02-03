import React, { useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../components/utilities/Layout";
import { getProject, getUsersRecruitRequests } from "../helpers/users/users";
import JoinRequest from "../components/projects/JoinRequest";
import PendingRequests from "../components/projects/PendingRequests";
import { updateCurrentProject } from "../store/actions";
import MembersList from "../components/projects/MembersList";


const Project = ({ projectId }) => {

  const dispatch = useDispatch();

  const [recruited, setRecruited] = useState(false);

  const walletAddress = useSelector((state) => state.manageData.walletAddress);
  const projectData = useSelector((state) => state.manageData.currentProject);
  const userInfo = useSelector((state) => state.manageData.userInfo);

  const getProjectData = async() => {
    const data = await getProject(walletAddress, projectId);
    console.log(data)
    dispatch(updateCurrentProject(data));
    if(!_.isNull(userInfo)) {
      const recruitRequests = await getUsersRecruitRequests(
        walletAddress,
        userInfo.pendingRequestsCount
      );
      alreadyRecruited(data, recruitRequests);
    }
  }

  const alreadyRecruited = (data, recruitRequests) => {
    const requestFound = recruitRequests.some((req) =>
      _.isEqual(req.project.id, data.project.id)
    );
    setRecruited(requestFound);
  };

  useEffect(() => {
    getProjectData();
  }, [walletAddress, userInfo]);

  return (
    <Layout>
      <h1>{projectData.project.name}</h1>
      <h2>Project ID: {projectId}</h2>

      <ol>
        {projectData.members.map((member, index) => (
          <li key={index}>{member.codename}</li>
        ))}
      </ol>
      <MembersList members={projectData.members} />
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
          alreadyRecruited={recruited}
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