import React from "react";
import { Card, Button, Message, Image } from "semantic-ui-react";
import {Router} from "../../routes";
import { getRandomNum } from "../../helpers/users/helpers";


const ProfileCardGroup = ({ cardData, resultsLoading, errorMessage }) => {

  return (
    <>
      {cardData.map((user, index) => (
        <Card.Group key={index}>
          <Card fluid centered style={{ height: "270px" }}>
            <Card.Content>
              <Image
                floated="right"
                size="small"
                src={`/images/default-user-pic-${getRandomNum(2)}.jpg`}
              />
              <h1>{user.header}</h1>
              {/* <Card.Meta>{user.address}</Card.Meta> */}
              <Card.Meta>{user.meta}</Card.Meta>
              <Card.Description>{user.description}</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className="ui two buttons">
                <Button basic color="green">
                  + Recruit
                </Button>
                <Button
                  basic
                  color="blue"
                  onClick={() => Router.pushRoute(`/profiles/${user.address}`)}
                >
                  Look at Profile
                </Button>
              </div>
            </Card.Content>
          </Card>
        </Card.Group>
      ))}
      {}
      <Message
        fluid="true"
        negative
        size="tiny"
        hidden={cardData.length || resultsLoading}
      >
        <Message.Header>{errorMessage}</Message.Header>
      </Message>
    </>
  );
}

export default ProfileCardGroup;