import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Loader } from "semantic-ui-react";
import Layout from "../../components/utilities/Layout";
import { Router } from "../../routes";
import { ROUTES } from "../../components/utilities/constants";
import VoteManager from "../../components/vote/VoteManager";


const Vote = ({ projectId }) => {

  const projects = useSelector((state) => state.manageData.projects);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (projects.length) {
      if (!projects.find((project) => project.id === projectId)) {
        Router.pushRoute(ROUTES.ENTRY);
      } else {
        setLoading(false);
      }
    }
  }, [projectId, projects]);

  return (
    <Layout>
      {loading ? (
        <Loader active size="massive">
          Loading...
        </Loader>
      ) : (
        <VoteManager projectId={projectId} />
      )}
    </Layout>
  );
};

Vote.getInitialProps = (props) => {
  return { projectId: props.query.id };
};

export default Vote;
