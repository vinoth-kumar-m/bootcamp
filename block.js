const crypto = require("crypto");
const Transaction = require("./transaction");
const Blockchain = require("./blockchain");
const Helper = require("./helper");

class Block {
    constructor(blockchain = new Blockchain()) {
        this._transactions = [];
        this._prev_hash = (blockchain.get_blocks_count() > 0) ?
            blockchain.get_recently_added_block()._hash : null;
        this._height = blockchain.get_blocks_count() + 1;
        this._hash = null;
        this._timestamp = new Date().getTime();
        this._transaction_count = 0;
    }

    _hash_transactions() {

        // TO-DO: Write your logic to hash all the transactions
    }

    _hash_payload() {
        return this._hash_transactions();
    }

    add_transaction(transaction) {
        this._transactions.push(transaction);
        this._transaction_count = this._transactions.length;
    }

    _hash_block() {

        // TO-DO: Write your logic to create block header with below details and return the hash value
        
        let blockheader_data = {
            'payload_hash': ,
            'timestamp': ,
            'prev_hash': ,
            'total_transactions': 
        };
        
    }

    finalize() {
        if(this._hash == null) {
            this._hash = this._hash_block();
        } else {
            throw new Error("Block already finalized");
        }
    }

    validate() {
        // TO-DO: Write your logic to check whether the block is valid
    }

    get_transaction_count() {
        return this._transaction_count;
    }
}

module.exports = Block;