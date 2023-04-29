import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Loader } from "semantic-ui-react";
import Layout from "../../components/utilities/Layout";
import { Router } from "../../routes";
import { ROUTES } from "../../components/utilities/constants";
import VoteManager from "../../components/vote/VoteManager";
import { getVoteDataByProjectId } from "../../helpers/mongodb/VoteCallCenter";
import { setVoteData } from "../../store/actions";


const Vote = ({ projectId }) => {

  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  const projects = useSelector((state) => state.manageData.projects);

  const getData = async() => {
    const daten = await getVoteDataByProjectId(projectId);
    if(daten) {
      dispatch(setVoteData(daten.data));
    }
  }

  useEffect(() => {
    if (projects.length) {
      if (!projects.find((project) => project.id === projectId)) {
        Router.pushRoute(ROUTES.ENTRY);
      } else {
        getData();
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
