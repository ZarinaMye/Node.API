/* const express = require('express');
const router = express.Router();
const Blockchain = require('../Blockchain');

const blockchain = new Blockchain();

// GET /api/1/blocks
router.get('/', (req, res) => {

  const blocks = blockchain.getBlocks();
  res.json(blocks);
});

// POST /api/1/blocks
router.post('/', (req, res) => {

  const data = req.body.data;

  // Validera att det finns data i blocket
  if (!data) {
    return res.status(400).json({ error: 'Data is required' });
  }

  const newBlock = blockchain.addBlock(data);
  res.json(newBlock);
});

module.exports = router; */


const Blockchain = require('../Blockchain');
const blockchain = new Blockchain();

// Hämtar och listar blocken i kedjan
function getBlocks(req, res) {

    res.status(200).json(blockchain.chain);
};

// Skickar data och lägger till ett nytt block
function addBlock(req, res) {

    const { data } = req.body;
    const block = blockchain.addBlock({ data });

    res.status(201).json({ message: 'Added new block', block: block });
};

module.exports = {getBlocks, addBlock}; 