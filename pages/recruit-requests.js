import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Layout from "../components/utilities/Layout";
import { getUsersRecruitRequests } from "../helpers/users/users";
import RecruitRequestList from "../components/profiles/RecruitRequestList";
import _ from "lodash";
import { updateRecruitRequests } from "../store/actions";


const RecruitRequests = ({ profileAddress }) => {

  const dispatch = useDispatch();

  const userInfo = useSelector((state) => state.manageData.userInfo);

  const retrieveRequests = async() => {
    const reqs = await getUsersRecruitRequests(profileAddress, parseInt(userInfo.pendingRequestsCount));
    dispatch(updateRecruitRequests(reqs));
  }

  useEffect(() => {
    if(userInfo) {
      retrieveRequests();
    }
  }, [userInfo]);

  return (
    <Layout>
    <h2>Recruit Requests</h2>
      { userInfo && ( _.isEqual(profileAddress, userInfo.userAddress) ? <RecruitRequestList profileAddress={profileAddress} />
      :  <h2>User address does not match</h2> )
      }
    </Layout>
  );

}

RecruitRequests.getInitialProps = (props) => {
  return { profileAddress: props.query.address };
};

export default RecruitRequests;