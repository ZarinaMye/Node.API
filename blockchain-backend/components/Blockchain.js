const Block = require('./Block');
const crypto = require('./generateHash');

class Blockchain {

  constructor() {

    this.chain = [Block.genesis()];
  };

  getBlocks() {
    return this.chain;
  }

  addBlock({ data }) {

    //Validerar att data finns, annars spars inte blocket
    const addedBlock = Block.mineBlock({ lastBlock: this.chain.at(-1), data }); 
    this.chain.push(addedBlock); 
    return addedBlock;
  };

  replaceChain(chain) {

    if (chain.length <= this.chain.length) return; //om ny kedja ej längre, ersätt ej

    if (!Blockchain.isValid(chain)) return; //om ny kedja ej är val, ersätt ej

    this.chain = chain;
  };

  static isValid(chain) {
     
    //Validerar att genesis är första blocket
    if (JSON.stringify(chain.at(0)) !== JSON.stringify(Block.genesis())) {
      return false; 
    };

    for (let i = 1; i < chain.length; i++) {

      const { timestamp, data, hash, lastHash } = chain.at(i);
       
      //Validerar att föregeående hash också är lasthash i efterföljande block 
      const prevHash = chain[i - 1].hash;
      if (lastHash !== prevHash) return false; 

      //Validerar/jämför hasharna för att kolla om blocket är giltigt
      const validHash = crypto(timestamp, data, lastHash);
      if (hash !== validHash) return false; 
    };

    return true;
  };
};

module.exports = Blockchain;