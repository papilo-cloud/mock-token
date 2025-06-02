require('dotenv').config();
const {providers, Contract} = require('ethers')
const ABI = require('./ABI');
const { formatUnits } = require('ethers/lib/utils');

const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL;
const DEPLOYED_ADDRESS = process.env.DEPLOYED_ADDRESS;
const ADDRESS = process.env.ADDRESS;

const callReadFunction = async () => {
    // Create a provider instance
    const provider = new providers.JsonRpcProvider(
        SEPOLIA_RPC_URL
    )

    // Create the contract instance and connect it to provider
    const contract = new Contract(
        DEPLOYED_ADDRESS,
        ABI.humanReadAbleABI,
        provider
    )

    // Getting ERC20 token symbol
    const symbol = await contract.symbol();
    console.log('Symbol:', symbol)

    // Getting ERC20 token name
    const name = await contract.name()
    console.log('Name:', name)

    // Getting ERC20 total supply value
    const totalSupply = await contract.totalSupply()
    const formattedTotalSupply = formatUnits(totalSupply, 10)
    console.log('Total Supply:', formattedTotalSupply, symbol)

    // Getting an ERC20 balance for specific wallet
    const balance = await contract.balanceOf(ADDRESS)
    const formattedBalance = formatUnits(balance, 10);
    console.log('Total Balance:', formattedBalance, symbol)
}

callReadFunction()