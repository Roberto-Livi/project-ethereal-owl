import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";
import { submitFeaturedUsers } from "../../helpers/users/users";

const FeaturedProfilesForm = () => {
  const [userCollection, setUserCollection] = useState(Array(5).fill(""));

  const handleChange = (index, value) => {
    setUserCollection((prev) => {
      const updated = [...prev];
      updated[index] = value;
      return updated;
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    await submitFeaturedUsers(userCollection);
  };

  return (
    <Form onSubmit={onSubmit}>
      <Form.Group unstackable widths={2}>
        {userCollection.slice(0, 2).map((address, index) => (
          <Form.Input
            key={index}
            label={`Address ${index + 1}`}
            placeholder={`Address ${index + 1}`}
            value={address}
            onChange={(e) => handleChange(index, e.target.value)}
          />
        ))}
      </Form.Group>
      <Form.Group widths={3}>
        {userCollection.slice(2).map((address, index) => (
          <Form.Input
            key={index + 2}
            label={`Address ${index + 3}`}
            placeholder={`Address ${index + 3}`}
            value={address}
            onChange={(e) => handleChange(index + 2, e.target.value)}
          />
        ))}
      </Form.Group>
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default FeaturedProfilesForm;
