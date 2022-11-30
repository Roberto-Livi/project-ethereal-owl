const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const compiledHodgeUsers = require("./build/HodgeUsers.json");

const provider = new HDWalletProvider(
  "forum motor hen around skill grab surround damp theory silk found absurd",
  "https://goerli.infura.io/v3/eb61db6460c142f099f2af67e35fee09"
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("Attempting to deploy from account", accounts[0]);

  const result = await new web3.eth.Contract(compiledHodgeUsers.abi)
    .deploy({ data: compiledHodgeUsers.evm.bytecode.object })
    .send({ gas: "2000000", from: accounts[0] });

  console.log("Contract deployed to", result.options.address);
  provider.engine.stop();
};
deploy();

// Attempting to deploy from account 0x713135cb90b7f6dFb68d7fE5243a1E2bF0dDc844
// Contract deployed to 0x6C979A42FE6FC691f3D4B6Ad10BB12dAafaD084e

// Attempting to deploy from account 0x713135cb90b7f6dFb68d7fE5243a1E2bF0dDc844
// Contract deployed to 0x62D1DfC54c0c1E1c2bd0cDDCCA35f4d4A8a6086B