import React from "react";
import Layout from "../components/utilities/Layout";


const RecruitRequests = ({ profileAddress }) => {
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