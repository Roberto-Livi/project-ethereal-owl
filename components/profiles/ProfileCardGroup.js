import React from "react";
import { useSelector } from "react-redux";
import { Card, Button, Message, Image } from "semantic-ui-react";
import {Router} from "../../routes";
import { getRandomNum } from "../../helpers/users/helpers";


const ProfileCardGroup = () => {

  const cards = useSelector((state) => state.manageData.profileSearch.results);
  const resultsPresent = useSelector(
    (state) => state.manageData.profileSearch.resultsPresent
  );
  const userInfo = useSelector((state) => state.manageData.userInfo);

  return (
    <>
      {cards.map((user, index) => (
        <Card.Group key={index}>
          <Card fluid>
            <Card.Content>
              <Image
                floated="right"
                size="tiny"
                src={`/images/default-user-pic-${getRandomNum(2)}.jpg`}
              />
              <Card.Header>{user.header}</Card.Header>
              <Card.Meta>{user.address}</Card.Meta>
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
      <Message
        style={{ width: "45vw" }}
        negative
        size="tiny"
        hidden={resultsPresent}
      >
        <Message.Header>No Results Found</Message.Header>
      </Message>
    </>
  );
}

export default ProfileCardGroup;