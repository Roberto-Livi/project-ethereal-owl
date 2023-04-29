const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const compiledUsersProxy = require("../buildUsersProxy/UsersProxy.json");
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

  // Replace this with the actual address of the deployed Users contract
  const usersContractAddress = "0x6dc1d6CFed4D5f3d92aF04180C5665D0AceF8DD9";

  const result = await new web3.eth.Contract(compiledUsersProxy.abi)
    .deploy({
      data: compiledUsersProxy.evm.bytecode.object,
      arguments: [usersContractAddress],
    })
    .send({ gas: "5400000", from: accounts[0] });

  console.log("UsersProxy contract deployed to", result.options.address);
  provider.engine.stop();
};

deploy();

// Attempting to deploy from account 0x713135cb90b7f6dFb68d7fE5243a1E2bF0dDc844
// UsersProxy contract deployed to 0x7CeEA69dD75F279e93e29Cd985F0f0B3DEbCef15

// Attempting to deploy from account 0x713135cb90b7f6dFb68d7fE5243a1E2bF0dDc844
// UsersProxy contract deployed to 0x442b18B98DD0EdB91EFADE481FCeb84c164a0B5F

// Attempting to deploy from account 0x713135cb90b7f6dFb68d7fE5243a1E2bF0dDc844
// UsersProxy contract deployed to 0xbB954F87ab46381Ab60985A06FAB31a5fA0481AB