import React, { useState } from 'react';
import { Card, Image, Button } from "semantic-ui-react";
import { Router } from "../../routes";


const ProjectCardGroup = ({ projects }) => {

  const [openJoinModal, setOpenJoinModal] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  const setJoinRequestInfo = (project) => {
    setOpenRecruitModal(true);
    setCurrentProject(project);
  };

  return (
    <>
      {projects.map((project, index) => (
        <Card.Group key={index}>
          <Card fluid centered style={{ height: "270px" }}>
            <Card.Content>
              <Image
                floated="right"
                size="small"
                src={`/images/default-user-pic-1.jpg`}
              />
              <h1>{project.name}</h1>
              {/* <Card.Meta>{user.address}</Card.Meta> */}
              <Card.Meta>Members: {project.membersCount}</Card.Meta>
              <Card.Description>{project.mission}</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className="ui two buttons">
                <Button
                  basic
                  color="blue"
                  onClick={() => Router.pushRoute(`/projects/${project.id}`)}
                >
                  Look at Project
                </Button>
              </div>
            </Card.Content>
          </Card>
        </Card.Group>
      ))}
      {openJoinModal && (
        <RecruitUserModal
          user={currentUser}
          open={openRecruitModal}
          closeModal={() => setOpenRecruitModal(false)}
        />
      )}
    </>
  );
}

export default ProjectCardGroup;