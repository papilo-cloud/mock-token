const {ethers} = require('ethers')
const { formatEther } = require('ethers/lib/utils')
require('dotenv').config()

const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL;
const ADDRESS = process.env.ADDRESS;

if (!SEPOLIA_RPC_URL) {
    console.error("Missing SEPOLIA_RPC_URL in .env file");

    process.exit(1);
}

const readChainData = async () => {
    const provider = new ethers.providers.JsonRpcProvider(
        SEPOLIA_RPC_URL
    )

    const blockNUmber = await provider.getBlockNumber()
    const balance = await provider.getBalance(ADDRESS)
    const formattedBalance = formatEther(balance);
    console.log('Block NUmber: ', blockNUmber)
    console.log('Balance: ', formattedBalance)
}

readChainData()