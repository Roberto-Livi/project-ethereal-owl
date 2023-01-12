import React from "react";
import Layout from "../components/utilities/Layout";

const ChaincrackerIndex = () => {

  return (
    <Layout>
      Welcome to Chaincracker
    </Layout>
  )
}

// Chaincracker.getInitialProps = async () => {
//   // const address = await web3.eth.getAccounts();
//   // console.log(address)
//   return { stars: 2, address };
// };

export default ChaincrackerIndex;