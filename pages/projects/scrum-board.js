import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Grid, Loader } from "semantic-ui-react";
import Layout from "../../components/utilities/Layout";
import ScrumTabs from "../../components/scrum/ScrumTabs";
import { Router } from "../../routes";
import { ROUTES } from "../../components/utilities/constants";

const ScrumBoard = ({ projectId }) => {

  const projects = useSelector((state) => state.manageData.projects);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if(projects.length) {
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
        <Loader active size="massive">Loading...</Loader>
      ) : (
        <ScrumTabs projectId={projectId} />
      )}
    </Layout>
  );
};

ScrumBoard.getInitialProps = (props) => {
  return { projectId: props.query.id };
};

export default ScrumBoard;
