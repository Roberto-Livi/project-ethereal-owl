import React from "react";
import { useSelector } from "react-redux";
import Layout from "../../components/utilities/Layout";
import { Grid } from "semantic-ui-react";
import LoadingOverlay from "../../components/utilities/LoadingOverlay";
import ProjectSearch from "../../components/projects/ProjectSearch";
import ProjectsHeader from "../../components/projects/ProjectsHeader";

const Projects = () => {

  const walletAddress = useSelector((state) => state.manageData.walletAddress);

  return (
    <Layout>
      {/* TODO: route should lead to manager page for all users projects */}
      <ProjectsHeader
        title={"Projects"}
        icon="suitcase"
        route={`/profiles/${walletAddress}`}
      />
      <ProjectSearch />
      {/* <ProfilesHeader /> */}
      {/* <ProfessionDropdown /> */}
      <LoadingOverlay active={false}>
        <Grid style={{ backgroundColor: "#e6e6fa" }}>
          <Grid.Row>
            <Grid.Column width={10}>

            </Grid.Column>
            {/* <Grid.Column>
              Advertised Projects
            </Grid.Column> */}
          </Grid.Row>
        </Grid>
      </LoadingOverlay>
    </Layout>
  );
}

export default Projects;