import React from "react";
import { useDispatch } from "react-redux";
import { Button, Form, Grid, Header, Segment } from "semantic-ui-react";
import { createUser, getUserData } from "../../helpers/users/users";
import { Router } from "../../routes";
import { updateUserInfo } from "../../store/actions";

const ProfileForm = () => {

  const dispatch = useDispatch();

  const onSubmit = async (event) => {
    event.preventDefault();
    const user = {
      codename: event.target[0].value,
      profession: event.target[1].value,
      description: event.target[2].value
    };
    await createUser(user)
      .then(async() => await dispatch(updateUserInfo(getUserData().value)))
      .then(() => Router.pushRoute("/profile"));
  }

  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="blue" textAlign="center">
          Create User Profile
        </Header>
        <Form size="large" onSubmit={(e) => onSubmit(e)}>
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
              Submit
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
)};

export default ProfileForm;
