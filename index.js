const Block = require('./block');
const Blockchain = require('./block.chain');


const objChain = new Blockchain();

objChain.addBlock(new Block ("12/12/2018",{amount: 5}))
objChain.addBlock(new Block ("12/13/2018",{amount: 10}))

console.log(JSON.stringify(objChain, null, 4))
console.log("Is this blockchain valid? " + objChain.checkValid())