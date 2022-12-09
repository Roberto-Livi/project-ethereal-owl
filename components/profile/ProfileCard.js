import React from "react";
import { useSelector } from "react-redux";


const ProfileCard = () => {

  const userInfo = useSelector((state) => state.manageData.userInfo);

  return (
    <div>
      <h1>Profile Card</h1>
      <ul>
        <li>{userInfo.codename}</li>
        <li>{userInfo.profession}</li>
      </ul>
    </div>
  )
}

export default ProfileCard;