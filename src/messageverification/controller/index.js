const Web3 = require('web3');

module.exports.dataVerify = async (signature, address, message) => {
  const web3 = new Web3('https://mainnet.infura.io/v3/ProjectID');
  const signAddress = web3.eth.accounts.recover(message, signature);

  return signAddress === address;
};
