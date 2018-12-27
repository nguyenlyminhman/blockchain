const Block = require("./block");
class Blockchain {
  /**
   * @param {*} genesisNode URL on which you start the blockchain. Is set to port 4000 with global var.
   */

  constructor(genesisNode) {
    this.chain = [this.createGenesisBlock()];
    this.nodes = [+genesisNode];
    this.difficulty = 4;
    this.pendingTransaction = [];
    this.miningReward = 100;
  }
  registerNode(port) {
    if (!this.nodes.includes(port)) {
      this.nodes.push(port);
    }
  }

  retrieveNodes() {
    return this.nodes;
  }

  updateBlockchain(newChain) {
    this.chain = newChain;
  }

  createGenesisBlock() {
    return new Block(0, "24/12/2018", [], "0");
  }

  getLatestBlock() {
    return this.chain[this.chain.length - 1];
  }

  addBlock(newBlock) {
    newBlock.previousHash = this.getLatestBlock().hash;
    newBlock.hash = newBlock.calculateHash();
    this.chain.push(newBlock);
  }

  checkValid() {
    for (let i = 1; i < this.chain.length; i++) {
      const currentBlock = this.chain[i];
      const previousBlock = this.chain[i - 1];
      console.log(currentBlock.hash);
      console.log(currentBlock.calculateHash());
      console.log("---");
      if (currentBlock.hash !== currentBlock.calculateHash()) {
        return false;
      }

      if (currentBlock.previousHash !== previousBlock.hash) {
        return false;
      }
    }
    return true;
  }
}

module.exports = Blockchain;
