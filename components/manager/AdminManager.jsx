import React from 'react';
import { Container } from 'semantic-ui-react';
import FeaturedProfilesForm from './FeaturedProfilesForm';
import UpgContractBtn from './UpgContractBtn';


const AdminManager = () => {
  return (
    <>
      <UpgContractBtn />
      <Container style={{ width: "500px" }} textAlign="left">
        <FeaturedProfilesForm />
      </Container>
    </>
  );
}

export default AdminManager;