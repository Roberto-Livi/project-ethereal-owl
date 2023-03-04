import React from "react";
import Layout from "../../components/utilities/Layout";
import ScrumTabs from "../../components/scrum/ScrumTabs";

const ScrumBoard = ({ projectId }) => {
  return (
    <Layout>
      <ScrumTabs projectId={projectId} />
    </Layout>
  );
}

ScrumBoard.getInitialProps = (props) => {
  return { projectId: props.query.id };
};

export default ScrumBoard;