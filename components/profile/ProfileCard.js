import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUserProfileCard } from "../../store/actions";


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