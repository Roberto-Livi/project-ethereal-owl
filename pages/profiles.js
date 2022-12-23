import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Layout from "../components/utilities/Layout";
import { Grid } from "semantic-ui-react";
import LoadingOverlay from "../components/utilities/LoadingOverlay";
import ProfileCardGroup from "../components/profiles/ProfileCardGroup";
import PageHeader from "../components/utilities/PageHeader";
import InputOption from "../components/profiles/InputOption";
import { getFeaturedUsers } from "../helpers/users/users";


const Profiles = () => {

  const [featuredUsers, setFeaturedUsers] = useState([]);

  const walletAddress = useSelector((state) => state.manageData.walletAddress);
  const searchResults = useSelector(
    (state) => state.manageData.profileSearch.results
  );
  const resultsLoading = useSelector(
    (state) => state.manageData.profileSearch.loading
  );

  const loadFeaturedProfiles = async() => {
    const users = await getFeaturedUsers();
    const userCollection = [];

    if(users.length) {
      for (let user of users) {
        userCollection.push({
          address: user.userAddress,
          header: user.codename,
          meta: user.profession,
          description: user.description,
        });
      }

      setFeaturedUsers(userCollection);
    }
  }

  useEffect(() => {
    loadFeaturedProfiles();
  }, []);

  return (
    <Layout>
      <PageHeader title={"Profiles"} icon="user circle" route={`/profiles/${walletAddress}`} />
      <InputOption />
      <LoadingOverlay active={resultsLoading}>
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
              <ProfileCardGroup errorMessage={"No Results Found"} cardData={searchResults} resultsLoading={resultsLoading} />
            </Grid.Column>
            <Grid.Column width={6}>
              <ProfileCardGroup errorMessage={"Featured Projects Coming Soon"} cardData={featuredUsers} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </LoadingOverlay>
    </Layout>
  );
};

export default Profiles;
