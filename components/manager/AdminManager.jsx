import React from 'react';
import { Container } from 'semantic-ui-react';
import FeaturedProfilesForm from './FeaturedProfilesForm';


const AdminManager = () => {
  return (
    <>
      <Container style={{ width: "500px"}} textAlign='left'>
        <FeaturedProfilesForm />
      </Container>
    </>
  )
}

export default AdminManager;