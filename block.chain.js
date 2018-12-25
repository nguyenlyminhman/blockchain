const Block = require('./block');
class Blockchain{
    constructor(){
        this.chain = [this.createGenesis()]
    }
    createGenesis(){
        return new Block(0,"24/12/2018", "Genesis code", "0")
    }

    latestBlock(){
        return this.chain[this.chain.length - 1]
    }

    addBlock(newBlock){
        newBlock.previousHash = this.latestBlock().hash
        newBlock.hash = newBlock.calculateHash()
        this.chain.push(newBlock);
    }

    checkValid(){
        for(let i = 1; i < this.chain.length; i++){
            const currentBlock = this.chain[i]
            const previousBlock = this.chain[i-1]
            console.log(currentBlock.hash)
            console.log(currentBlock.calculateHash())
            console.log("---")
            if(currentBlock.hash !== currentBlock.calculateHash()){
                return false
            }

            if(currentBlock.previousHash !== previousBlock.hash){
                return false
            }
        }
        return true
    }
}

module.exports = Blockchain