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
    .send({ gas: "2000000", from: accounts[0] });

  console.log("Contract deployed to", result.options.address);
  provider.engine.stop();
};
deploy();

// Attempting to deploy from account 0x713135cb90b7f6dFb68d7fE5243a1E2bF0dDc844
// Contract deployed to 0x4bD3C0DcffA88717b343C4CCC5E327F3B2e96A02

// Attempting to deploy from account 0x713135cb90b7f6dFb68d7fE5243a1E2bF0dDc844
// Contract deployed to 0x224E564DDDBC09F9B10D321a638555BfE7e5DEfC

// Attempting to deploy from account 0x713135cb90b7f6dFb68d7fE5243a1E2bF0dDc844
// Contract deployed to 0xE486De1Ef8d9A56bcb80976a53213a24197FFB8B

// Attempting to deploy from account 0x713135cb90b7f6dFb68d7fE5243a1E2bF0dDc844
// Contract deployed to 0xA0A499c01631bD394C1d0453F18004f4E680c2b9