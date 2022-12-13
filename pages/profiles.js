import React, { useState } from "react";
import { useSelector } from "react-redux";
import Layout from "../components/Layout";
import { Grid, Icon, Message } from "semantic-ui-react";
import { Link } from "../routes";
import LoadingOverlay from "../components/LoadingOverlay";
import ProfileCardGroup from "../components/profiles/ProfileCardGroup";
import ProfessionDropdown from "../components/profiles/ProfessionDropdown";
import ProfilesHeader from "../components/profiles/ProfilesHeader";


const Profiles = () => {

  const resultsPresent = useSelector((state) => state.manageData.profileSearch.resultsPresent);

  return (
    <Layout>
      <ProfilesHeader />
      <ProfessionDropdown />
      <LoadingOverlay active={false}>
        <Grid>
          <Grid.Row>
            <Grid.Column width={10}>
              <Message
                style={{ width: "45vw" }}
                negative
                size="tiny"
                hidden={resultsPresent}
              >
                <Message.Header>No Results Found</Message.Header>
              </Message>
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
