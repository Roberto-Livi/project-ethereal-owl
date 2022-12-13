import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card, Button } from "semantic-ui-react";
import {Router} from "../../routes";
import { getFiveUsers } from "../../helpers/users/users";
import { updateProfileSearch } from "../../store/actions";

const ProfileCardGroup = () => {

  const dispatch = useDispatch();

  const cards = useSelector((state) => state.manageData.profileSearch.results);

  const getStartingData = async () => {
    const users = await getFiveUsers();
    const userCollection = users.map((user) => {
       return {
         header: user.codename,
         address: user.userAddress,
         meta: user.profession,
         description: user.description,
       };
     })
    dispatch(updateProfileSearch(userCollection));
  };

  useEffect(() => {
    getStartingData();
  }, []);

  return (
    <>
      {cards.map((user, index) => (
        <Card.Group key={index}>
          <Card fluid>
            <Card.Content>
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
    </>
  );
}

export default ProfileCardGroup;