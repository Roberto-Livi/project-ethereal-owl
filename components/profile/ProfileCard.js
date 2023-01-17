import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUserProfileCard } from "../../store/actions";
import { Button, Dimmer, Loader } from "semantic-ui-react";
import { Router } from "../../routes";
import _ from "lodash";


const ProfileCard = ({profileCardAddress}) => {

  const dispatch = useDispatch();

  const walletAddress = useSelector((state) => state.manageData.walletAddress);
  const userProfile = useSelector((state) => state.manageData.userProfileCard);
  const userInfo = useSelector((state) => state.manageData.userInfo);

  useEffect(() => {
    dispatch(updateUserProfileCard(profileCardAddress || walletAddress));
  }, [dispatch, profileCardAddress, walletAddress]);

  return (
    <div>
      <h1>Profile Card</h1>
      <Dimmer active={!userProfile}>
        <Loader>Loading Profile</Loader>
      </Dimmer>
      {userProfile && (
        <ul>
          <li>{userProfile.codename}</li>
          <li>{userProfile.userAddress}</li>
          <li>{userProfile.profession}</li>
          <li>{userProfile.description}</li>
        </ul>
      )}
      {_.isEqual(profileCardAddress, userInfo.userAddress) && (
        <div>
          <Button
            primary
            onClick={() =>
              Router.pushRoute(`/profiles/${walletAddress}/recruit-requests`)
            }
          >
            Project Join Requests [{userInfo.pendingRequestsCount}]
          </Button>
        </div>
      )}
    </div>
  );
}

export default ProfileCard;