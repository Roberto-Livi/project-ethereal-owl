import React from "react";
import { Button } from "semantic-ui-react";
import Layout from "../components/Layout";
import ProfileForm from "../components/ProfileForm";
import web3 from "../ethereum/web3";
import hodgeUsers from "../ethereum/hodgeusers";

const Profile = () => {

  const onClickHandle = async() => {
    const accounts = await web3.eth.getAccounts();
    await hodgeUsers.methods.createUser(accounts[0], "Dante Adam", "Digital Artist", "test desc").send({
      from: accounts[0]
    })
    // { owlAddress:  "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4", codename: "dexter", profession: "coder", description: "test desc"}
  }

  const onClickHandle2 = async () => {
    const summary = await hodgeUsers.methods.getHodgemen().call();
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