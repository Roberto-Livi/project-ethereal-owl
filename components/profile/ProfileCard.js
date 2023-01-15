import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUserProfileCard } from "../../store/actions";
import { Button, Dimmer, Loader } from "semantic-ui-react";
import { Router } from "../../routes";


const ProfileCard = ({profileCardAddress}) => {

  const dispatch = useDispatch();

  const walletAddress = useSelector((state) => state.manageData.walletAddress);
  const userProfile = useSelector((state) => state.manageData.userProfileCard);

  const routeToJoinRequests = () => {
    Router.pushRoute(`profiles/${walletAddress}/recruit-requests`);
  }

  useEffect(() => {
    dispatch(updateUserProfileCard(profileCardAddress || walletAddress));
  }, [dispatch, profileCardAddress, walletAddress]);

  return (
    <div>
      <h1>Profile Card</h1>
      <Dimmer active={!userProfile}>
        <Loader>Loading Profile</Loader>
      </Dimmer>
      { userProfile &&
      <ul>
        <li>{userProfile.codename}</li>
        <li>{userProfile.userAddress}</li>
        <li>{userProfile.profession}</li>
        <li>{userProfile.description}</li>
      </ul>
      }
      <Button primary onClick={routeToJoinRequests}>
        Project Join Requests
      </Button>
    </div>
  );
}

export default ProfileCard;