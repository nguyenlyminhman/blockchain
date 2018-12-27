const SHA256 = require('crypto-js/sha256')
const logger = exports.Logger = {}

class Block{
    constructor(timestamp, data){
        this.index = 0
        this.timestamp = timestamp
        this.data = data
        this.previousHash = "0"
        this.hash = this.calculateHash()
        this.nonce = 0
    }

    calculateHash(){
        return SHA256(this.index + this.previousHash + this.timestamp + this.data + this.nonce).toString()
    }

    mineBlock(difficulty){
        while(this.hash.substring(0, difficulty)){
            this.nonce++;
            this.hash = this.calculateHash();
        }
        console.log("Block mined: " + this.hash)
        
    }
}
 
module.exports = Block