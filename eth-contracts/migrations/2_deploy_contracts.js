// migrating the appropriate contracts
var SquareVerifier = artifacts.require("./SquareVerifier.sol");
var SolnSquareVerifier = artifacts.require("./SolnSquareVerifier.sol");

module.exports = function(deployer) {
  deployer.then(async () => {
    await deployer.deploy(SquareVerifier);
    await deployer.deploy(SolnSquareVerifier, SquareVerifier.address);
  });
};
