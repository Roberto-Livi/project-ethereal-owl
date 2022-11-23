import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Layout from "../components/Layout";
import web3 from "../ethereum/web3";

const EtherealOwlIndex = (props) => {

  // const [address, setAddress] = useState(null);
  const hootBalance = useSelector((state) => state.manageData.hootBalance);

  // const getAddress = async() => {
  //   setAddress(await web3.eth.getAccounts());
  // }

  useEffect(() => {
    console.log(hootBalance)
  }, []);


  return (
    <Layout>
      Welcome to Ethereal Owl
    </Layout>
  )
}

// EtherealOwlIndex.getInitialProps = async () => {
//   // const address = await web3.eth.getAccounts();
//   // console.log(address)
//   return { stars: 2, address };
// };

export default EtherealOwlIndex;