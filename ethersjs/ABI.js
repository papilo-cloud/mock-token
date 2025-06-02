const {ethers} = require('ethers')
const { Interface } = require('ethers/lib/utils')

module.exports = {
    humanReadAbleABI: new Interface([
        'function symbol() view returns(string)',
        'function name() view returns(string)',
        'function mint(address, uint256)',
        'function balanceOf(address) view returns(uint256)',
        'function totalSupply() view returns(uint256)',
        'function transfer(address, uint256) returns(bool)',
        "event Transfer(address indexed from, address indexed to, uint256 value)"
    ])
}