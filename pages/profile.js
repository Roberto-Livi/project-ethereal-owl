import React from "react";
import { useSelector } from "react-redux";
import Layout from "../components/Layout";
import ProfileForm from "../components/profile/ProfileForm";
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