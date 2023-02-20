import React from "react";
import { useSelector } from "react-redux";
import { Card, Button, Image } from "semantic-ui-react";
import { getRandomNum } from "../../helpers/users/helpers";
import { Router } from "../../routes";


const UsersProjectsGroup = () => {

  const projects = useSelector((state) => state.manageData.projects);

  return (
    <div>
      {projects.map((project, index) => (
        <Card.Group key={index}>
          <Card fluid style={{ height: "270px" }}>
            <Card.Content>
              <Image
                floated="right"
                size="small"
                src={`/images/default-user-pic-${getRandomNum(2)}.jpg`}
              />
              <h1>{project.name}</h1>
              <Card.Meta>Project Id: {project.id}</Card.Meta>
              <Card.Meta>Members: {project.membersCount}</Card.Meta>
              <Card.Description>{project.mission}</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className="ui two buttons">
                {/* <Button basic color="green">
                  + Recruit
                </Button> */}
                <Button
                  basic
                  color="green"
                  onClick={() => Router.pushRoute(`/projects/${project.id}`)}
                >
                  Look at Project
                </Button>
              </div>
            </Card.Content>
          </Card>
        </Card.Group>
      ))}
    </div>
  );
}

export default UsersProjectsGroup;