const {ethers, providers, Wallet, Contract} = require('ethers')
const ABI = require('./ABI');
const { parseUnits, formatUnits } = require('ethers/lib/utils');
require('dotenv').config()

const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL;
const DEPLOYED_ADDRESS = process.env.DEPLOYED_ADDRESS;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const RECIPIENT_ADDRESS = process.env.RECEIVERS_ADDRESS;

const transferFunction = async () => {
    // Create a provider intsance
    const provider = new providers.JsonRpcProvider(SEPOLIA_RPC_URL)

    // Create a wallet intsance
    const wallet = new Wallet(PRIVATE_KEY, provider);

    // Create the contract instance and connect it to our wallet
    const contract = new Contract(
        DEPLOYED_ADDRESS,
        ABI.humanReadAbleABI,
        wallet
    )

    // Getting ERC20 token symbol
    const symbol = await contract.symbol()

    // Call transfer function from smart contract and transfer 250 token to recipient
    try {
        await contract.transfer(RECIPIENT_ADDRESS, parseUnits('250', 18))
        console.log('Transfer Successful')

        // Get balance of our wallet
        const balance = await contract.balanceOf(RECIPIENT_ADDRESS)
        const formattedBalance = formatUnits(balance, 10)
        console.log(`Token balance of ${RECIPIENT_ADDRESS}: ${formattedBalance} ${symbol}`)
    } catch (error) {
        console.error(error)
    }
}


transferFunction()

