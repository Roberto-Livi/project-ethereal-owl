import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dimmer, Loader, Button } from "semantic-ui-react";
import Layout from "../components/utilities/Layout";
import { getProject, getUsersRecruitRequests } from "../helpers/users/users";
import JoinRequest from "../components/projects/JoinRequest";
import PendingRequests from "../components/projects/PendingRequests";
import { updateCurrentProject } from "../store/actions";
import MembersList from "../components/projects/MembersList";
import { Router } from "../routes";

const Project = ({ projectId }) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const [recruited, setRecruited] = useState(false);
  const walletAddress = useSelector((state) => state.manageData.walletAddress);
  const projectData = useSelector((state) => state.manageData.currentProject);
  const userInfo = useSelector((state) => state.manageData.userInfo);

  const getProjectData = async () => {
    const data = await getProject(walletAddress, projectId);
    dispatch(updateCurrentProject(data));
    if (!_.isNull(userInfo)) {
      const recruitRequests = await getUsersRecruitRequests(
        walletAddress,
        userInfo.pendingRequestsCount
      );
      alreadyRecruited(data, recruitRequests);
    }
    setIsLoading(false);
  };

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
      <Dimmer active={isLoading} inverted>
        <Loader size="massive">Loading...</Loader>
      </Dimmer>
      {!isLoading && (
        <>
          <h1>{projectData.project.name}</h1>
          <h2>Project ID: {projectId}</h2>
          <ol>
            {projectData.members.map((member, index) => (
              <li key={index}>{member.codename}</li>
            ))}
          </ol>
          <MembersList />
          {projectData.loaded && projectData.isMember ? (
            <PendingRequests projectId={projectId} projectData={projectData} />
          ) : (
            <JoinRequest
              projectId={projectId}
              projectData={projectData}
              alreadyRecruited={recruited}
            />
          )}
          {
            (projectData.loaded && projectData.isMember) &&
            <div>
              <Button primary onClick={() => Router.pushRoute(`/projects/${projectId}/scrum-board`)}>
                Scrum Board
              </Button>
              <Button primary onClick={() => Router.pushRoute(`/projects/${projectId}/vote`)}>
                Vote Manager
              </Button>
            </div>
          }
        </>
      )}
    </Layout>
  );
};

Project.getInitialProps = (props) => {
  return { projectId: props.query.id };
};

export default Project;
