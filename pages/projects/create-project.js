import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../components/utilities/Layout";
import { Button, Form, Grid, Header, Segment, Container, Message } from "semantic-ui-react";
import { createProject } from "../../helpers/users/users";
import { Router } from "../../routes";


const CreateProject = () => {

  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const userInfo = useSelector((state) => state.manageData.userInfo);
  const walletAddress = useSelector((state) => state.manageData.walletAddress);

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    await createProject(event.target[0].value, event.target[1].value)
      .then(() => setLoading(false))
      .then(() => Router.pushRoute("/projects/users-projects"));
  };

  return (
    <Layout>
      <Container
        style={{
          width: "650px",
          backgroundColor: "#e6e6fa",
          marginTop: "60px",
        }}
      >
        <Grid
          textAlign="center"
          style={{ height: "50vh" }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h1" textAlign="center">
              Create a Project
            </Header>
            {!!userInfo ? (
              <Form loading={loading} size="large" onSubmit={onSubmit}>
                <Segment stacked>
                  <Form.Input fluid placeholder="Name" />
                  <Form.Input fluid placeholder="Mission" />
                  <Button color="violet" fluid size="large">
                    Submit
                  </Button>
                </Segment>
              </Form>
            ) : (
              <Message color="red" visible>You must create a user profile before creating a project</Message>
            )}
          </Grid.Column>
        </Grid>
      </Container>
    </Layout>
  );
}

export default CreateProject;