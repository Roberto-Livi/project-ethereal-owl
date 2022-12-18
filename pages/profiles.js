import React from "react";
import { useSelector } from "react-redux";
import Layout from "../components/utilities/Layout";
import { Grid } from "semantic-ui-react";
import LoadingOverlay from "../components/utilities/LoadingOverlay";
import ProfileCardGroup from "../components/profiles/ProfileCardGroup";
import PageHeader from "../components/utilities/PageHeader";
import InputOption from "../components/profiles/InputOption";


const Profiles = () => {

  const walletAddress = useSelector((state) => state.manageData.walletAddress);
  const searchResults = useSelector(
    (state) => state.manageData.profileSearch.results
  );
  const resultsPresent = useSelector(
    (state) => state.manageData.profileSearch.resultsPresent
  );

  return (
    <Layout>
      <PageHeader icon="user circle" route={`/profiles/${walletAddress}`} />
      <InputOption />
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
              <ProfileCardGroup cardData={searchResults} showMesage={resultsPresent} />
            </Grid.Column>
            <Grid.Column width={6}>
              <ProfileCardGroup cardData={[]} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </LoadingOverlay>
    </Layout>
  );
};

export default Profiles;
