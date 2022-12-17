import React from "react";
import { useSelector } from "react-redux";
import Layout from "../components/utilities/Layout";
import { Grid, Message } from "semantic-ui-react";
import LoadingOverlay from "../components/utilities/LoadingOverlay";
import ProfileCardGroup from "../components/profiles/ProfileCardGroup";
import PageHeader from "../components/utilities/PageHeader";
import InputOption from "../components/profiles/InputOption";


const Profiles = () => {

  const walletAddress = useSelector((state) => state.manageData.walletAddress);

  return (
    <Layout>
      <PageHeader icon="user circle" route={`/profiles/${walletAddress}`} />
      <InputOption />
      <LoadingOverlay active={false}>
        <Grid>
          <Grid.Row>
            <Grid.Column width={10}>
              <ProfileCardGroup />
            </Grid.Column>
            {/* <Grid.Column>
              Advertised User Profiles
            </Grid.Column> */}
          </Grid.Row>
        </Grid>
      </LoadingOverlay>
    </Layout>
  );
};

export default Profiles;
