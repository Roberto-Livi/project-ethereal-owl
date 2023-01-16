import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Layout from "../components/utilities/Layout";
import { getUsersRecruitRequests } from "../helpers/users/users";
import RecruitRequestList from "../components/profiles/RecruitRequestList";


const RecruitRequests = ({ profileAddress }) => {

  const [requests, setRequests] = useState([]);

  const userInfo = useSelector((state) => state.manageData.userInfo);

  const retrieveRequests = async() => {
    const reqs = await getUsersRecruitRequests(profileAddress, parseInt(userInfo.pendingRequestsCount));
    setRequests(reqs);
  }

  useEffect(() => {
    if(userInfo) {
      retrieveRequests();
    }
  }, [userInfo]);

  return (
    <Layout>
      <h2>Recruit Requests</h2>
      <RecruitRequestList requests={requests} />
    </Layout>
  )
}

RecruitRequests.getInitialProps = (props) => {
  return { profileAddress: props.query.address };
};

export default RecruitRequests;