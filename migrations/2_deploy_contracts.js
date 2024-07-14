const MyNFT = artifacts.require("MyNFT");

module.exports = function(deployer, network, accounts) {
  deployer.deploy(MyNFT, accounts[0]);
};
