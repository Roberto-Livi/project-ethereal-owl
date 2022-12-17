import React from "react";
import Layout from "../components/utilities/Layout";
import { Grid } from "semantic-ui-react";
import LoadingOverlay from "../components/utilities/LoadingOverlay";
import PageHeader from "../components/utilities/PageHeader";

const Projects = () => {



  return (
    <Layout>
      <PageHeader icon="suitcase" route={`/projects/${projectId}`} />
      {/* <ProfilesHeader /> */}
      {/* <ProfessionDropdown /> */}
      <LoadingOverlay active={false}>
        <Grid>
          <Grid.Row>
            <Grid.Column width={10}>

            </Grid.Column>
            {/* <Grid.Column>
              Advertised User Profiles
            </Grid.Column> */}
          </Grid.Row>
        </Grid>
      </LoadingOverlay>
    </Layout>
  );
}

export default Projects;