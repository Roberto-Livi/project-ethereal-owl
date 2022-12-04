import React, { useEffect } from "react";
import Layout from "../components/Layout";
import { getUsers } from "../helpers/users/users";
import { Dropdown } from "semantic-ui-react";
import { professionOptions } from "../helpers/users/professions";

const Profiles = () => {

  return (
    <Layout>
      <h1>Profiles</h1>
      <Dropdown
        placeholder="Select Profession"
        fluid
        search
        selection
        options={professionOptions}
        onSearchChange={(e, d) => console.log(d)}
        onChange={(e,d) => console.log(d)}
      />
    </Layout>
  );
};

Profiles.getInitialProps = async () => {
  const users = await getUsers();
  console.log(users);
  return { users };
};

export default Profiles;
