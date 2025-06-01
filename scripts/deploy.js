const {ethers} = require('hardhat');

async function main() {
    const [deployer] = await ethers.getSigners()
    console.log(`Deploying contracts with the account: ${deployer.address}`);

    const balance = await deployer.getBalance();
    console.log(`Account balance: ${balance.toString()}`)

    const Token = await ethers.getContractFactory('MockToken');
    const token = await Token.deploy();

    console.log("Transaction hash:", token.deployTransaction.hash);
    
    await token.deployed();

    console.log(`Contract deployed to: ${token.address}`)
}

main()
    .then(() => process.exit())
    .catch(err => {
        console.error(err)
        process.exit(1)
    })