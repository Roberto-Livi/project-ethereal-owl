import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, Grid, Header, Segment } from "semantic-ui-react";
import { createUser, getUserData } from "../../helpers/users/users";
import { updateUserInfo } from "../../store/actions";
import { professionOptions } from "../../helpers/users/professions";
import _ from "lodash";
import { createMongoUserObj } from "../../helpers/mongodb/UsersCallCenter";

const ProfileForm = ({ profileAddress }) => {

  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [profession, setProfession] = useState("");

  const walletAddress = useSelector((state) => state.manageData.walletAddress);

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const user = {
      codename: event.target[0].value,
      profession: profession,
      description: event.target[1].value
    };
    const resp = await createUser(user);

    if(resp) {
      createMongoUserObj(event.target[0].value, walletAddress);
      setLoading(false);
      const userData = await getUserData();
      dispatch(updateUserInfo(userData));
    }
  }

  if(!walletAddress || !_.isEqual(profileAddress, walletAddress)) {
    return (
      <div>Connect Wallet</div>
    )
  } else {
    return (
      <Grid
        textAlign="center"
        style={{ height: "50vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="blue" textAlign="center">
            Create User Profile
          </Header>
          <Form loading={loading} size="large" onSubmit={onSubmit}>
            <Segment stacked>
              <Form.Input fluid placeholder="Code Name" />
              <Form.Select
                onChange={(e, obj) => setProfession(obj.value)}
                fluid
                options={professionOptions}
                placeholder="Profession"
              />
              <Form.Input fluid placeholder="Description" />
              <Button color="blue" fluid size="large">
                Submit
              </Button>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    );
  }
};

export default ProfileForm;
