import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Layout from "../components/utilities/Layout";
import { getUsersRecruitRequests } from "../helpers/users/users";
import RecruitRequestList from "../components/profiles/RecruitRequestList";
import _ from "lodash";


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
      { userInfo && ( _.isEqual(profileAddress, userInfo.userAddress) ? <RecruitRequestList requests={requests} />
      :  <h2>User address does not match</h2> )
      }
    </Layout>
  );

}

RecruitRequests.getInitialProps = (props) => {
  return { profileAddress: props.query.address };
};

export default RecruitRequests;