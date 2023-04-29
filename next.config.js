const conf = {
  env: {
    polygonMumbai: process.env.POLYGON_MUMBAI,
    walletKey: process.env.MNEMONIC,
    contractAbi: process.env.CONTRACT_ABI,
    mongodbUri: process.env.MONGODB_URI,
    ponTokenAbi: process.env.PON_TOKEN_CONTRACT,
    lotteryContract: process.env.LOTTERY_CONTRACT,
  },
};

module.exports = conf;
