import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../components/utilities/Layout";
import { Button, Form, Grid, Header, Segment, Container, Message } from "semantic-ui-react";
import { createProject, getUserData, getUsersProjects, retrieveProjectByName } from "../../helpers/users/users";
import { Router } from "../../routes";
import { retrieveProjects, updateUserInfo } from "../../store/actions";
import _ from "lodash";
import { createMongoProject } from "../../helpers/mongodb/ProjectsCallCenter";
import { createScrumboard } from "../../helpers/mongodb/ScrumCallCenter";
import { createVoteSystem } from "../../helpers/mongodb/VoteCallCenter";


const CreateProject = () => {

  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [emptyInput, setEmptyInput] = useState(false);

  const userInfo = useSelector((state) => state.manageData.userInfo);
  const walletAddress = useSelector((state) => state.manageData.walletAddress);

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const response = await createProject(walletAddress, event.target[0].value, event.target[1].value);

    if(response) {
      await createMongoProject(event.target[0].value);
      const projs = await getUsersProjects(walletAddress);
      const user = await getUserData();
      dispatch(updateUserInfo(user));
      dispatch(retrieveProjects(projs));
      const proj = await retrieveProjectByName(event.target[0].value);
      scrumBoardCreation(proj);
      await createVoteSystem(proj);
      Router.pushRoute("/projects/users-projects");
    }

    setLoading(false);
  };

  const scrumBoardCreation = async(proj) => {
    await createScrumboard(proj, walletAddress)
      .then((success) => {
        if (success) {
          console.log("Scrum board created successfully");
        } else {
          console.log("Error creating Scrum board");
        }
      })
      .catch((err) => {
        console.error("Error creating Scrum board:", err);
      });
  }

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
                  {/* <Message color="red" visible={false}>
                    Input can't be empty
                  </Message> */}
                </Segment>
              </Form>
            ) : (
              <Message color="red" visible>
                You must create a user profile before creating a project
              </Message>
            )}
          </Grid.Column>
        </Grid>
      </Container>
    </Layout>
  );
}

export default CreateProject;