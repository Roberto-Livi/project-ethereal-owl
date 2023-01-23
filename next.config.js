const conf = {
  env: {
    polygonMumbai: process.env.POLYGON_MUMBAI,
    walletKey: process.env.WALLET_KEY,
    contractAbi: process.env.CONTRACT_ABI,
    mongodbUri: process.env.MONGODB_URI,
    ponTokenAbi: process.env.PON_TOKEN_ABI
  }
};

module.exports = conf;
