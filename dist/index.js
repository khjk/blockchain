"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Block {
    constructor(index, hash, previousHash, data, timestamp) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}
const genesisBlock = new Block(0, "23423423423423", "", "firstblockdata", 12345);
let blockchain = [genesisBlock]; //arayofBlocks
console.log(blockchain);
//# sourceMappingURL=index.js.map