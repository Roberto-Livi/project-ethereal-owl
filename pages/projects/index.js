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
      <ProjectsHeader title={"Projects"} />
      <ProjectSearch />
      {/* <ProfilesHeader /> */}
      <LoadingOverlay active={false}>
        <Grid>
          <Grid.Column
            style={{
              textAlign: "center",
              backgroundColor: "#9370db",
            }}
            width={10}
          >
            <h1>Search Results</h1>
          </Grid.Column>
          <Grid.Column
            style={{
              textAlign: "center",
              backgroundColor: "blueviolet",
            }}
            width={6}
          >
            <h1>Featured</h1>
          </Grid.Column>
        </Grid>
        <Grid style={{ backgroundColor: "#e6e6fa" }}>
          <Grid.Row>
            <Grid.Column width={10}>
              {/* <ProfileCardGroup
                errorMessage={"No Results Found"}
                cardData={searchResults}
                resultsLoading={resultsLoading}
              /> */}
            </Grid.Column>
            <Grid.Column width={6}>
              {/* <ProfileCardGroup
                errorMessage={"Featured Projects Coming Soon"}
                cardData={featuredUsers}
              /> */}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </LoadingOverlay>
    </Layout>
  );
}

export default Projects;