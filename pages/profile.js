import React from "react";
import { useSelector } from "react-redux";
import { Button } from "semantic-ui-react";
import Layout from "../components/Layout";
import ProfileForm from "../components/profile/ProfileForm";
import web3 from "../ethereum/web3";
import users from "../ethereum/users";
import ProfileCard from "../components/profile/ProfileCard";


const Profile = () => {

  const userInfo = useSelector((state) => state.manageData.userInfo);

  return (
    <Layout>
      { userInfo ? <ProfileCard /> : <ProfileForm /> }
    </Layout>
  );
}

export default Profile;