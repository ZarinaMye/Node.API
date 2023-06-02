const Block = require("./Block");

class Blockchain {
    constructor() {

      this.chain = [Block.genesis()];
    };

    addBlock({ data }) {
      const addedBlock = Block.mineBlock({ lastBlock: this.chain.at(-1), data });
      this.chain.push(addedBlock);  //lägger till block till kedjan
    };

    static isValid(chain) {
      if (JSON.stringify(chain.at(0)) !== JSON.stringify(Block.genesis())) {
        return false;//kollar att genesisi är först 
      }
    
      for (let i = 1; i < chain.length; i++) {
        const { timestamp, data, hash, lastHash } = chain.at(i);
        const prevHash = chain[i - 1].hash;
    
        if (lastHash !== prevHash) return false;
    
        const validHash = crypto(timestamp, data, lastHash);
        if (hash !== validHash) return false;
      }
    
      return true;
    };
};
    
module.exports = Blockchain;