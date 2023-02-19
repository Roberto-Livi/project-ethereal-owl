import React from "react";
import { useSelector } from "react-redux";
import { Segment, Grid } from "semantic-ui-react";

const DataDashboard = () => {

  const userInfo = useSelector((state) => state.manageData.userInfo);
  const tokenBalance = useSelector((state) => state.manageData.tokenBalance);

  return (
    <Segment>
      <Grid columns={2} stackable divided className="dashboard-container">
        <Grid.Row>
          <Grid.Column width={4} textAlign="center">
            <div className="dashboard-label">Codename</div>
            <div className="dashboard-value">{userInfo.codename}</div>
          </Grid.Column>
          <Grid.Column width={4} textAlign="center">
            <div className="dashboard-label">Token Balance</div>
            <div className="dashboard-value">{tokenBalance}</div>
          </Grid.Column>
          <Grid.Column width={4} textAlign="center">
            <div className="dashboard-label">Projects Involved In</div>
            <div className="dashboard-value">{userInfo.projectsInvolved}</div>
          </Grid.Column>
          <Grid.Column width={4} textAlign="center">
            <div className="dashboard-label">Ignitionist NFT's</div>
            <div className="dashboard-value">0</div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};

export default DataDashboard;
