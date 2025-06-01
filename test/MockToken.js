const { expect } = require('chai');
const { ethers } = require('hardhat');


describe('MockToken Contract', () => { 
    let tokenFactory, token, owner, addr1, addr2;

    beforeEach( async() => {
        tokenFactory = await ethers.getContractFactory('MockToken')
        token = await tokenFactory.deploy();
        await token.deployed();
        [owner, addr1, addr2, _] = await ethers.getSigners()
        
        // Mint tokens to owner
        await token.mint(owner.address, 10000);
    })

    describe('Deployment', () => {
        it('Should set the right owner', async () => {
            expect(await token.owner()).to.equal(owner.address);
        })
        it('Should assign the total supply of tokens to the owner', async () => {
            const ownerBal = await token.balanceOf(owner.address);
            expect(await token.totalSupply()).to.equal(ownerBal);
        })
    })

    describe('Transaction', () => {
        it('Should transfer between accounts', async () => {
            await token.transfer(addr1.address, 300);
            const initialAddr1Bal = await token.balanceOf(addr1.address);
            expect(initialAddr1Bal).to.equal(300);

            await token.connect(addr1).transfer(addr2.address, 100);
            const addr2Bal = await token.balanceOf(addr2.address);
            expect(addr2Bal).to.equal(100);

            const finalAddr1Bal = await token.balanceOf(addr1.address)
            expect(finalAddr1Bal).to.equal(initialAddr1Bal - addr2Bal);
        })
    })
})