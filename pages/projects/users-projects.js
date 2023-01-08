import React from "react";
import { useSelector } from "react-redux";
import Layout from "../../components/utilities/Layout";
import { Grid, Message } from "semantic-ui-react";
import ProjectsDashboard from "../../components/projects/ProjectsDashboard";


const UsersProjects = () => {

  const projects = useSelector((state) => state.manageData.projects);

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
