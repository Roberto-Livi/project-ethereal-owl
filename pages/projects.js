import React from "react";
import Layout from "../components/utilities/Layout";
import { Grid } from "semantic-ui-react";
import LoadingOverlay from "../components/utilities/LoadingOverlay";

const Projects = () => {
  return (
    <Layout>
      {/* <ProfilesHeader /> */}
      {/* <ProfessionDropdown /> */}
      <LoadingOverlay active={false}>
        <Grid>
          <Grid.Row>
            <Grid.Column width={10}>
              {/* <Message
                style={{ width: "45vw" }}
                negative
                size="tiny"
                hidden={resultsPresent}
              >
                <Message.Header>No Results Found</Message.Header>
              </Message> */}
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