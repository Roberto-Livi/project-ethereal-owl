import React from "react";
import { Button } from "semantic-ui-react";
import Layout from "../components/Layout";
import ProfileForm from "../components/ProfileForm";
import web3 from "../ethereum/web3";
import users from "../ethereum/users";

const Profile = () => {

  const onClickHandle = async() => {
    const accounts = await web3.eth.getAccounts();
    await users.methods.createUser(accounts[0], "Dante Adam", "Digital Artist", "test desc").send({
      from: accounts[0]
    });
  }

  const onClickHandle2 = async () => {
    const summary = await users.methods.getAllUsers().call();
    console.log(summary)
  };

  return (
    <Layout>
      <Button color="green" basic onClick={onClickHandle}>
        Create User
      </Button>
      <Button color="primary" basic onClick={onClickHandle2}>
        Create User
      </Button>
      <ProfileForm />
    </Layout>
  );
}

export default Profile;