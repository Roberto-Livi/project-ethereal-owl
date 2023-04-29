const path = require("path");
const solc = require("solc");
const fs = require("fs-extra");

const buildPath = path.resolve(__dirname, "../buildUsersProxy");
fs.removeSync(buildPath);

const contractsPath = path.resolve(__dirname, "..", "contracts");
const usersProxyPath = path.resolve(contractsPath, "UsersProxy.sol");
const source = fs.readFileSync(usersProxyPath, "utf8");

const input = {
  language: "Solidity",
  sources: {
    "UsersProxy.sol": {
      content: source,
    },
  },
  settings: {
    outputSelection: {
      "*": {
        "*": ["*"],
      },
    },
  },
};

const compilationOutput = solc.compile(JSON.stringify(input), {
  import: (importPath) => {
    const fullPath = path.join(contractsPath, importPath);
    const content = fs.readFileSync(fullPath, "utf8");
    return { contents: content };
  },
});

const output = JSON.parse(compilationOutput).contracts["UsersProxy.sol"];

fs.ensureDirSync(buildPath);

for (let contract in output) {
  fs.outputJsonSync(
    path.resolve(buildPath, contract.replace(":", "") + ".json"),
    output[contract]
  );
}
