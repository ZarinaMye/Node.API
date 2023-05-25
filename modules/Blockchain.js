const Block = require("./Block");

class Blockchain {
    constructor() {

        this.chain = [Block.genesis()];
    };

    addBlock({ data }) {
        const addedBlock = Block.mineBlock({ lastBlock: this.chain.at(-1), data });
        this.chain.push(addedBlock);  //lägger till block till kedjan
    };
};

module.exports = Blockchain;