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
    .send({ gas: "3800000", from: accounts[0] });

  console.log("Contract deployed to", result.options.address);
  provider.engine.stop();
};

deploy();

// Attempting to deploy from account 0x713135cb90b7f6dFb68d7fE5243a1E2bF0dDc844
// Contract deployed to 0x815e1f9b03F7B8E464D87400702A7a95De35E5C2

// Attempting to deploy from account 0x713135cb90b7f6dFb68d7fE5243a1E2bF0dDc844
// Contract deployed to 0x224E564DDDBC09F9B10D321a638555BfE7e5DEfC

// Attempting to deploy from account 0x713135cb90b7f6dFb68d7fE5243a1E2bF0dDc844
// Contract deployed to 0xDEc83Ac7712Fc308aFdC8d3cb7BFA0f026d4ed04