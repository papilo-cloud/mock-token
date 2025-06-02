const {ethers, providers, Wallet} = require('ethers')
require('dotenv').config()

const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL;
const DEPLOYED_ADDRESS = process.env.DEPLOYED_ADDRESS;
const ADDRESS = process.env.ADDRESS;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const RECIPIENT_ADDRESS = process.env.RECEIVERS_ADDRESS;

const signMessage = async () => {
    const provider = new providers.JsonRpcProvider(SEPOLIA_RPC_URL);

    const wallet = new Wallet(PRIVATE_KEY, provider);

    // const output = await;
    console.log('Signature of message:', output);
}

signMessage()