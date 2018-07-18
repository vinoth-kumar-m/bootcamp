const fs = require("fs");

class Blockchain {
    constructor() {
        this._blocks = [];
    }

    get_blocks() {
        return this._blocks;
    }

    add_block(block) {
        this._blocks.push(block);
    }

    get_blocks_count() {
        return this._blocks.length;
    }

    get_recently_added_block() {
        if (this.get_blocks_count() > 0) {
            return this._blocks.slice(-1).pop();
        }
        return null;
    }

    validate_chain() {
        // TO-DO: Write your logic to check whether the whole chain is valid
    }
}

module.exports = Blockchain;