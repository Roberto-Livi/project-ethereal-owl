import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../components/utilities/Layout";
import { Button, Form, Grid, Header, Segment, Container } from "semantic-ui-react";
import { createProject } from "../../helpers/users/users";


const CreateProject = () => {

  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const walletAddress = useSelector((state) => state.manageData.walletAddress);

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    await createProject(event.target[0].value, event.target[1].value)
      .then(() => setLoading(false))
  };

  return (
    <Layout>
      <Container
        style={{
          width: "650px",
          backgroundColor: "#87CEEB",
          marginTop: "60px"
        }}
      >
        <Grid
          textAlign="center"
          style={{ height: "50vh" }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h1" color="blue" textAlign="center">
              Create a Project
            </Header>
            <Form loading={loading} size="large" onSubmit={onSubmit}>
              <Segment stacked>
                <Form.Input fluid placeholder="Name" />
                <Form.Input fluid placeholder="Mission" />
                <Button color="blue" fluid size="large">
                  Submit
                </Button>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </Container>
    </Layout>
  );
}

export default CreateProject;