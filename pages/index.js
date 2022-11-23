import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Layout from "../components/Layout";
import web3 from "../ethereum/web3";
import { connectWallet } from "../store/actions";

const EtherealOwlIndex = (props) => {

  const dispatch = useDispatch();

  // const [address, setAddress] = useState(null);
  // const hootBalance = useSelector((state) => state.manageData.hootBalance);
  const address = useSelector((state) => state.manageData.walletAddress);

  const getAddress = async() => {
    console.log(await web3.eth.getAccounts());
    dispatch(connectWallet(await web3.eth.getAccounts()));
    // setAddress(await web3.eth.getAccounts());
  }

  useEffect(() => {
    getAddress();
  }, []);


  return (
    <Layout>
      Welcome to Ethereal Owl {address}
    </Layout>
  )
}

// EtherealOwlIndex.getInitialProps = async () => {
//   // const address = await web3.eth.getAccounts();
//   // console.log(address)
//   return { stars: 2, address };
// };

export default EtherealOwlIndex;