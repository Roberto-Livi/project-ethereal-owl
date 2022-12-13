import React, { useState } from "react";
import { useSelector } from "react-redux";
import Layout from "../components/Layout";
import { getUsers } from "../helpers/users/users";
import { Dropdown, Button, Card, Grid, Icon } from "semantic-ui-react";
import { professionOptions } from "../helpers/users/professions";
import { Link, Router } from "../routes";


const Profiles = () => {

  const [cards, setCards] = useState([]);

  const walletAddress = useSelector((state) => state.manageData.walletAddress);

  const handleOnChange = async (selection) => {
    const allUsers = await getUsers(selection.value);
    const items = [];
    allUsers.map((user) => {
      if(user.profession === selection.value) {
        items.push({
            header: user.codename,
            address: user.userAddress,
            meta: user.profession,
            description: user.description
        })
      }
    })

    setCards(items);
  }

  return (
    <Layout>
      <div style={{ display: "flex" }}>
        <h2>Profiles</h2>
        <div style={{ marginLeft: "auto" }}>
          <Link route={`/profiles/${walletAddress}`}>
            <a>
              <Icon name="user circle" size="big" />
            </a>
          </Link>
        </div>
      </div>

      <Dropdown
        placeholder="Select Profession"
        fluid
        search
        selection
        options={professionOptions}
        width={20}
        onChange={(e, selected) => handleOnChange(selected)}
        style={{ marginBottom: "30px" }}
      />
      <Grid>
        <Grid.Row>
          <Grid.Column width={10}>
            {cards.map((user, index) => (
              <Card.Group key={index}>
                <Card fluid>
                  <Card.Content>
                    <Card.Header>{user.header}</Card.Header>
                    <Card.Meta>{user.address}</Card.Meta>
                    <Card.Meta>{user.meta}</Card.Meta>
                    <Card.Description>{user.description}</Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <div className="ui two buttons">
                      <Button basic color="green">
                        + Recruit
                      </Button>
                      <Button
                        basic
                        color="blue"
                        onClick={() =>
                          Router.pushRoute(`/profiles/${user.address}`)
                        }
                      >
                        Look at Profile
                      </Button>
                    </div>
                  </Card.Content>
                </Card>
              </Card.Group>
            ))}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Layout>
  );
};

export default Profiles;
