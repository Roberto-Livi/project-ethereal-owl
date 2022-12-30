import React from "react";
import { useSelector } from "react-redux";
import Layout from "../components/utilities/Layout";
import ProfileForm from "../components/profile/ProfileForm";
import ProfileCard from "../components/profile/ProfileCard";


const Profile = (props) => {

  const userInfo = useSelector((state) => state.manageData.userInfo);

  return (
    <Layout>
      {userInfo ? (
        <ProfileCard profileCardAddress={props.profileAddress} />
      ) : (
        <ProfileForm profileAddress={props.profileAddress} />
      )}
    </Layout>
  );
}

Profile.getInitialProps = (props) => {
  return { profileAddress: props.query.address };
};

export default Profile;