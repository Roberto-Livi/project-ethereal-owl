import React from "react";
import { Form, Button } from "semantic-ui-react";
import { submitFeaturedUsers } from "../../helpers/users/users";

const FeaturedProfilesForm = () => {

  const onSubmit = async(event) => {
    const userCollection = [];
    userCollection.push(event.target[0].value);
    userCollection.push(event.target[1].value);
    userCollection.push(event.target[2].value);
    userCollection.push(event.target[3].value);
    userCollection.push(event.target[4].value);

    await submitFeaturedUsers(userCollection);
  }

  return (
    <>
      <Form onSubmit={onSubmit}>
        <Form.Group unstackable widths={2}>
          <Form.Input label="Address 1" placeholder="Address 1" />
          <Form.Input label="Address 2" placeholder="Address 2" />
        </Form.Group>
        <Form.Group widths={3}>
          <Form.Input label="Address 3" placeholder="Address 3" />
          <Form.Input label="Address 4" placeholder="Address 4" />
          <Form.Input label="Address 5" placeholder="Address 5" />
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
    </>
  );
};

export default FeaturedProfilesForm;