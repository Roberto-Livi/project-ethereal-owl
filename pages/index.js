import React from "react";
import Layout from "../components/Layout";

const EtherealOwlIndex = (props) => {

  // const hootBalance = useSelector((state) => state.manageData.hootBalance);

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