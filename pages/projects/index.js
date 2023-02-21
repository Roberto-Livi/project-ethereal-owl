import React, { useState } from "react";
import { useSelector } from "react-redux";
import Layout from "../../components/utilities/Layout";
import { Grid } from "semantic-ui-react";
import LoadingOverlay from "../../components/utilities/LoadingOverlay";
import ProjectSearch from "../../components/projects/ProjectSearch";
import ProjectsHeader from "../../components/projects/ProjectsHeader";
import ProjectCardGroup from "../../components/projects/ProjectCardGroup";

const Projects = () => {

  const [featuredProjects, setFeaturedProjects] = useState([]);

  const walletAddress = useSelector((state) => state.manageData.walletAddress);
  const projects = useSelector(
    (state) => state.manageData.projectSearch
  );

  return (
    <Layout>
      <ProjectsHeader title={"Projects"} />
      <ProjectSearch />
      <LoadingOverlay active={projects.loading}>
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
            <ProjectCardGroup
              projects={projects.results}
              resultsLoading={projects.loading}
              errorMessage={"No Results Found"}
            />
            </Grid.Column>
            <Grid.Column width={6}>
              <ProjectCardGroup
                projects={featuredProjects}
                errorMessage={"Featured Projects Coming Soon"}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </LoadingOverlay>
    </Layout>
  );
}

export default Projects;