# Udacity Blockchain Capstone

In this project tokens were minted to represent titles to properties. Before a token was minted, ownership of the property needed to be verified. zk-SNARKs was used to create a verification system which could prove ownership of title to the property without revealing that specific information on the property. 

Once the token had been verified, it was placed on a blockchain market place (OpenSea) for others to purchase. 

## Package Information

Truffle v5.1.41
Solidity - 0.5.5
Node v12.18.2
Web3.js v1.2.1

## Contract 'SquareVerifier'
`address 0x68481734bf5E378Bcd6aE774c6B9f6297e4eCB86`

## Contract 'SolnSquareVerifier'
`address 0x74BC5e473Fc3dbEeEc8Be610Af28fCB32f5dB8C3`

## OpenSea MarketPlace Storefront links for minted tokens

1. `https://rinkeby.opensea.io/assets/0x74bc5e473fc3dbeeec8be610af28fcb32f5db8c3/1`
2. `https://rinkeby.opensea.io/assets/0x74bc5e473fc3dbeeec8be610af28fcb32f5db8c3/2`
3. `https://rinkeby.opensea.io/assets/0x74bc5e473fc3dbeeec8be610af28fcb32f5db8c3/3`
4. `https://rinkeby.opensea.io/assets/0x74bc5e473fc3dbeeec8be610af28fcb32f5db8c3/4`
5. `https://rinkeby.opensea.io/assets/0x74bc5e473fc3dbeeec8be610af28fcb32f5db8c3/5`
6. `https://rinkeby.opensea.io/assets/0x74bc5e473fc3dbeeec8be610af28fcb32f5db8c3/6`
7. `https://rinkeby.opensea.io/assets/0x74bc5e473fc3dbeeec8be610af28fcb32f5db8c3/7`
8. `https://rinkeby.opensea.io/assets/0x74bc5e473fc3dbeeec8be610af28fcb32f5db8c3/8`
9. `https://rinkeby.opensea.io/assets/0x74bc5e473fc3dbeeec8be610af28fcb32f5db8c3/9`
10.`https://rinkeby.opensea.io/assets/0x74bc5e473fc3dbeeec8be610af28fcb32f5db8c3/10`

##Testing the code

Please make sure you've already installed ganache-cli, Truffle and enabled MetaMask extension in your browser.

1. Clone this repository:

`
git clone https://github.com/kelvin84hk/Udacity-Blockchain-Capstone.git`
`

2. Run  `cd Udacity-Blockchain-Capstone`

3. Run `npm install` and `npm install truffle-hdwallet-provider`

4. Creat and save your Metamask mnemonic in a text file in /eth-contracts and name it as .secret

5. Launch Ganache:

```
ganache-cli -m "spirit supply whale amount human item harsh scare congress discover talent hamster"
```

6. Run `cd eth-contracts` and `truffle test`

## Deploy contracts to RINKEBY test network

7. Run `truffle migrate --network rinkeby`

## Project Resources

* [Remix - Solidity IDE](https://remix.ethereum.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Truffle Framework](https://truffleframework.com/)
* [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
* [Open Zeppelin ](https://openzeppelin.org/)
* [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
* [Docker](https://docs.docker.com/install/)
* [ZoKrates](https://github.com/Zokrates/ZoKrates)
