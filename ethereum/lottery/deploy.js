const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const compiledLottery = require("./lottery-build/Lottery.json");

const provider = new HDWalletProvider(
  "forum motor hen around skill grab surround damp theory silk found absurd",
  "https://rpc-mumbai.maticvigil.com/v1/8939996484b586d1abb6e52a4bf40ade5e71faa3"
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("Attempting to deploy from account", accounts[9]);

  const result = await new web3.eth.Contract(compiledLottery.abi)
    .deploy({ data: compiledLottery.evm.bytecode.object })
    .send({ gas: "2100000", from: accounts[9] });

  console.log("Contract deployed to", result.options.address);
  provider.engine.stop();
};

deploy();

// Attempting to deploy from account 0xDF36E9988F18416Ad7d9DD38ffBfb2D07a2c7b67
// Contract deployed to 0x4a153e492C0BeaFC162E1d60a52F7D1b9D6C180B