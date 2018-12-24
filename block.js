const SHA256 = require('crypto-js/sha256')

class Block{
    constructor(){
        this.index = 0
        this.timestamp = this.timestamp
        this.data = this.data
        this.previousHash = "0"
        this.hash = this.calculateHash()
        this.none = 0
    }

    calculateHash(){
        return SHA256(this.index + this.previousHash + this.timestamp + this.data + this.hash).toString()
    }

    mineBlock(difficulty){

    }
}
 
module.exports = Block