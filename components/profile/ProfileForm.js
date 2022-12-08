import React from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
} from "semantic-ui-react";

const ProfileForm = () => (
  <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as="h2" color="blue" textAlign="center">
        Input Account Information
      </Header>
      <Form size="large">
        <Segment stacked>
          <Form.Input
            fluid
            placeholder="Code Name"
          />
          <Form.Input
            fluid
            placeholder="Profession"
          />
          <Form.Input
            fluid
            placeholder="Description"
          />
          <Button color="blue" fluid size="large">
            Create Account
          </Button>
        </Segment>
      </Form>
    </Grid.Column>
  </Grid>
);

export default ProfileForm;
