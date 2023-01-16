import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Layout from "../components/utilities/Layout";
import { getUsersRecruitRequests } from "../helpers/users/users";


const RecruitRequests = ({ profileAddress }) => {

  const userInfo = useSelector((state) => state.manageData.userInfo);

  const retrieveRequests = async() => {
    const reqs = await getUsersRecruitRequests(profileAddress, parseInt(userInfo.pendingRequestsCount));
    console.log(reqs);
  }

  useEffect(() => {
    if(userInfo) {
      retrieveRequests();
    }
  }, [userInfo]);

  return (
    <Layout>
      <h2>Recruit Requests</h2>

    </Layout>
  )
}

RecruitRequests.getInitialProps = (props) => {
  return { profileAddress: props.query.address };
};

export default RecruitRequests;