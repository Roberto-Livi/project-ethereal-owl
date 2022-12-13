import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUserProfileCard } from "../../store/actions";
import { Dimmer, Loader } from "semantic-ui-react";


const ProfileCard = ({profileCardAddress}) => {

  const dispatch = useDispatch();

  const walletAddress = useSelector((state) => state.manageData.walletAddress);
  const userProfile = useSelector((state) => state.manageData.userProfileCard);

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
    </div>
  );
}

export default ProfileCard;