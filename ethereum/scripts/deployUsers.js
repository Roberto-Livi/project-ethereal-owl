const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const compiledUsers = require("../buildUsers/Users.json");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../../.env") });

const mnemonic = process.env.MNEMONIC;

const provider = new HDWalletProvider(
  mnemonic,
  "https://rpc-mumbai.maticvigil.com/v1/8939996484b586d1abb6e52a4bf40ade5e71faa3"
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("Attempting to deploy from account", accounts[0]);

  const result = await new web3.eth.Contract(compiledUsers.abi)
    .deploy({ data: compiledUsers.evm.bytecode.object })
    .send({ gas: "5800000", from: accounts[0] });

  console.log("Contract deployed to", result.options.address);
  provider.engine.stop();
};

deploy();

// Attempting to deploy from account 0x713135cb90b7f6dFb68d7fE5243a1E2bF0dDc844
// Contract deployed to 0x5600430022df8deb44E1b1519613E7D5A7E2f527

// Attempting to deploy from account 0x713135cb90b7f6dFb68d7fE5243a1E2bF0dDc844
// Contract deployed to 0x537f7D17946ef355A77F5Bdf09A90d215b203634

// Attempting to deploy from account 0x713135cb90b7f6dFb68d7fE5243a1E2bF0dDc844
// Contract deployed to 0x70E5DfdF39326674490865D97AFE40b68bAD2345

// Attempting to deploy from account 0x713135cb90b7f6dFb68d7fE5243a1E2bF0dDc844
// Contract deployed to 0xb2995c8Af2C1647503EFF7f99e7C28ea5Cb963Ac

// Attempting to deploy from account 0x713135cb90b7f6dFb68d7fE5243a1E2bF0dDc844
// Contract deployed to 0x6dc1d6CFed4D5f3d92aF04180C5665D0AceF8DD9