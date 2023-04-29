const path = require("path");
const solc = require("solc");
const fs = require("fs-extra");

const buildPath = path.resolve(__dirname, "../buildUsers");
fs.removeSync(buildPath);

const contractsPath = path.resolve(__dirname, "..", "contracts");
const usersPath = path.resolve(contractsPath, "Users.sol");
const source = fs.readFileSync(usersPath, "utf8");

const input = {
  language: "Solidity",
  sources: {
    "Users.sol": {
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


console.log("Compilation output:", compilationOutput);

const output = JSON.parse(compilationOutput).contracts["Users.sol"];

fs.ensureDirSync(buildPath);

for (let contract in output) {
  fs.outputJsonSync(
    path.resolve(buildPath, contract.replace(":", "") + ".json"),
    output[contract]
  );
}
