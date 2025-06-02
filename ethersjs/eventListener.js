const {ethers, providers, Contract} = require('ethers');
const { id } = require('ethers/lib/utils');
const ABI = require('./ABI');
require('dotenv').config()

const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL;
const DEPLOYED_ADDRESS = process.env.DEPLOYED_ADDRESS;
const ADDRESS = process.env.ADDRESS;
const RECIPIENT_ADDRESS = process.env.RECEIVERS_ADDRESS;

const eventListener = () => {
    const provider = new providers.JsonRpcProvider(SEPOLIA_RPC_URL);

    const contract = new Contract(
        DEPLOYED_ADDRESS,
        ABI.humanReadAbleABI,
        provider
    )

    const filter = contract.filters.Transfer(ADDRESS, RECIPIENT_ADDRESS)

    contract.on(filter, (arg1, arg2, arg3, tnxLog) => {
        console.log([arg1, arg2, arg3, tnxLog])
    })

}

eventListener()