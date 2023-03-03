import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Layout from "../../components/utilities/Layout";
import { Grid, Message } from "semantic-ui-react";
import ProjectsDashboard from "../../components/projects/ProjectsDashboard";
import { retrieveProjects } from "../../store/actions";
import { getUsersProjects } from "../../helpers/users/users";


const UsersProjects = () => {

  const dispatch = useDispatch();

  const projects = useSelector((state) => state.manageData.projects);
  const walletAddress = useSelector((state) => state.manageData.walletAddress);

  const getProjects = async() => {
    const projs = await getUsersProjects(walletAddress);
    dispatch(retrieveProjects(projs));
  }

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <Layout>
      <h1 style={{ textAlign: "center" }}>Projects Dashboard</h1>
      <Grid style={{ backgroundColor: "#e6e6fa", marginTop: "50px" }}>
        <Grid.Row>
          <Grid.Column>
            { projects.length ? (
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
