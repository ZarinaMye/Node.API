const Block = require('./Block');
const crypto = require('./generateHash');

class Blockchain {

  constructor() {

    this.chain = [Block.genesis()];
  };

  addBlock({ data }) {

    const addedBlock = Block.mineBlock({ lastBlock: this.chain.at(-1), data }); //data måste finnas för att nytt block ska skapas
    this.chain.push(addedBlock); //lägger till block till kedjan
    return addedBlock;
  };

  replaceChain(chain) {

    if (chain.length <= this.chain.length) return; //om ny kedja ej längre, ersätt ej

    if (!Blockchain.isValid(chain)) return; //om ny kedja ej är val, gör inget

    this.chain = chain;
  };

  static isValid(chain) {

    if (JSON.stringify(chain.at(0)) !== JSON.stringify(Block.genesis())) {
      return false; //kollar att genesis är först 
    };

    for (let i = 1; i < chain.length; i++) {

      const { timestamp, data, hash, lastHash } = chain.at(i);

      const prevHash = chain[i - 1].hash;
      if (lastHash !== prevHash) return false; //kollar att föregående hash också är lasthash i efterföljande block

      const validHash = crypto(timestamp, data, lastHash);
      if (hash !== validHash) return false; //jämför hashen för att kolla om blocket är giltigt 
    };

    return true;
  };
};

module.exports = Blockchain;