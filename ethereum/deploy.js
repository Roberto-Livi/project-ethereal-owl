const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const compiledUsers = require("./build/Users.json");

const provider = new HDWalletProvider(
  "forum motor hen around skill grab surround damp theory silk found absurd",
  "https://rpc-mumbai.maticvigil.com/v1/8939996484b586d1abb6e52a4bf40ade5e71faa3"
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("Attempting to deploy from account", accounts[0]);

  const result = await new web3.eth.Contract(compiledUsers.abi)
    .deploy({ data: compiledUsers.evm.bytecode.object })
    .send({ gas: "4800000", from: accounts[0] });

  console.log("Contract deployed to", result.options.address);
  provider.engine.stop();
};

deploy();

// Attempting to deploy from account 0x713135cb90b7f6dFb68d7fE5243a1E2bF0dDc844
// Contract deployed to 0x651A1b33D5Ace1e290739A4FaDfE91a656c7c76f

// Attempting to deploy from account 0x713135cb90b7f6dFb68d7fE5243a1E2bF0dDc844
// Contract deployed to 0xFc2fe3Bd1BD520b61711ad58f221D0095c116853

// Attempting to deploy from account 0x713135cb90b7f6dFb68d7fE5243a1E2bF0dDc844
// Contract deployed to 0x17771AF8EBa33FC5F7Ce8D7f4E8f3Abf7EEAE202