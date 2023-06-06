const Blockchain = require('./Blockchain');
const blockchain = new Blockchain();

// Hämtar och listar blocken i kedjan
function getBlocks(req, res) {
res.status(200).json(blockchain.chain);
}

// Skickar data och lägger till ett nytt block
function addBlock(req, res) {
const { data } = req.body;
const block = blockchain.addBlock({ data });

res.status(201).json({ message: 'Added new block', block: block });
}

module.exports = {getBlocks, addBlock};