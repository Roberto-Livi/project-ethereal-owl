import React from 'react';
import { Card, Image, Button } from "semantic-ui-react";
import { Router } from "../../routes";

const ProjectCardGroup = ({ projects }) => {
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
                  onClick={() => console.log(project)}
                  basic
                  color="green"
                >
                  Request to Join
                </Button>
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
    </>
  );
}

export default ProjectCardGroup;