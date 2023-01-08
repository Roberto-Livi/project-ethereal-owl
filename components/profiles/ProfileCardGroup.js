import React, { useState } from "react";
import { Card, Button, Message, Image } from "semantic-ui-react";
import {Router} from "../../routes";
import { getRandomNum } from "../../helpers/users/helpers";
import RecruitUserModal from "./RecruitUserModal";


const ProfileCardGroup = ({ cardData, resultsLoading, errorMessage }) => {

  const [openRecruitModal, setOpenRecruitModal] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const setRecruitInfo = (user) => {
    setOpenRecruitModal(true);
    setCurrentUser(user);
  }

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
                <Button
                  onClick={() => setRecruitInfo(user)}
                  basic
                  color="green"
                >
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
      {openRecruitModal && (
        <RecruitUserModal
          user={currentUser}
          open={openRecruitModal}
          closeModal={() => setOpenRecruitModal(false)}
        />
      )}
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