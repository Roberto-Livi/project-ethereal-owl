import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../components/utilities/Layout";
import { Grid, Message } from "semantic-ui-react";
import { getUsersProjects } from "../../helpers/users/users";
import ProjectsDashboard from "../../components/projects/ProjectsDashboard";
import { retrieveProjects } from "../../store/actions";


const UsersProjects = () => {

  const dispatch = useDispatch();

  const [retrievedProjects, setRetrievedProjects] = useState(false);

  const walletAddress = useSelector((state) => state.manageData.walletAddress);

  const getProjects = async() => {
    const projects = await getUsersProjects(walletAddress);
    if(!!projects) {
      setRetrievedProjects(true);
      dispatch(retrieveProjects(projects));
    } else {
      setRetrievedProjects(false);
    }
  }

  useEffect(() => {
    getProjects();
  }, [walletAddress]);

  return (
    <Layout>
      <h1 style={{ textAlign: "center" }}>Projects Dashboard</h1>
      <Grid style={{ backgroundColor: "#e6e6fa", marginTop: "50px" }}>
        <Grid.Row>
          <Grid.Column>
            { retrievedProjects ? (
              <ProjectsDashboard />
            ) : (
              <div style={{ textAlign: "center" }}><Message size="massive" compact>
                You are not involved in any projects. Create or join one!
              </Message></div>
            )}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Layout>
  );
};

export default UsersProjects;
