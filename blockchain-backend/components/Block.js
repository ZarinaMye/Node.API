const GENESIS_DATA = require("../config/config");
const crypto = require("./generateHash");

class Block {

    constructor({ timestamp, data, hash, lastHash }) {

        this.timestamp = timestamp,
        this.data = data,
        this.hash = hash,
        this.lastHash = lastHash
    };

    static genesis() {

        return new this(GENESIS_DATA);
    };

    static mineBlock({ lastBlock, data }) {
        
        const timestamp = Date.now();
        const lastHash = lastBlock.hash;

        return new this({
          timestamp,
          lastHash,
          data,
          hash: crypto(timestamp, lastHash, data) //blockets hash skapas
        });
    };
};

module.exports = Block;