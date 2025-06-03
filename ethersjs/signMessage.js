const {ethers, providers, Wallet} = require('ethers')
require('dotenv').config()

const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

const signMessage = async () => {
    const provider = new providers.JsonRpcProvider(SEPOLIA_RPC_URL);

    const wallet = new Wallet(PRIVATE_KEY, provider);

    const msg = 'ethers.js is a powerful library';
    const output = await wallet.signMessage(msg);
    console.log('Signature of message:', output);
}

signMessage()