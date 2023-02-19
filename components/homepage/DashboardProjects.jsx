import React from "react";
import { Segment, Container, Grid } from "semantic-ui-react";

const DashboardProjects = () => {
  return (
    <Segment>
      <Grid columns={2} stackable>
        <Grid.Row>
          <Grid.Column width={16}>
            <Container fluid textAlign="center">
              <h2>Row 1 - Container</h2>
            </Container>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Container fluid textAlign="center">
              <h2>Row 2 - Column 1</h2>
            </Container>
          </Grid.Column>
          <Grid.Column>
            <Container fluid textAlign="center">
              <h2>Row 2 - Column 2</h2>
            </Container>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Container fluid textAlign="center">
              <h2>Row 3 - Column 1</h2>
            </Container>
          </Grid.Column>
          <Grid.Column>
            <Container fluid textAlign="center">
              <h2>Row 3 - Column 2</h2>
            </Container>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Container fluid textAlign="center">
              <h2>Row 4 - Column 1</h2>
            </Container>
          </Grid.Column>
          <Grid.Column>
            <Container fluid textAlign="center">
              <h2>Row 4 - Column 2</h2>
            </Container>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}

export default DashboardProjects;