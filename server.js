// lektion 7 server.js = API backend
const express = require('express');
const cors = require('cors'); //=middleware
const Blockchain = require('./Blockchain');
const { getBlocks, addBlock } = require('./blockController');

const app = express();
const blockchain = new Blockchain();

app.use(express.json()); //middleware - talar om att vi vill använda bodyparse inbyggt i express
app.use(cors()); // middleware - öppnar upp för anrop varsom helst ifrån(säkerhetsrisk!) att kommunicera med mina endpoints...

// Hämtar och Listar blocken i kedjan
app.get('/api/1/blocks', getBlocks);

// Skickar data och Lägger till ett nytt block
app.post('/api/1/blocks', addBlock);

const PORT = 5001;

app.listen(PORT, () =>
console.log("Server is up and running on port: ${PORT}")
);


/* //lektion 7 server.js = API backend 
const express = require('express');
const cors = require('cors'); //=middleware
const Blockchain = require('./Blockchain');

const app = express();
const blockchain = new Blockchain();

app.use(express.json()); //middleware - talar om att vi vill använda bodyparse inbyggt i express
app.use(cors()); // middleware - öppnar upp för anrop varsom helst ifrån(säkerhetsrisk!) att kommunicera med mina endpoints...

//skapar endpoints
//Hämtar och Listar blocken i kedjan
app.get('/api/1/blocks', (req, res) => {
    res.status(200).json(blockchain.chain); //200 = get
});

//Skickar data och Lägger till ett nytt block 
app.post('/api/1/blocks', (req, res) => { //endel skriver mine isf blocks..
    const { data } = req.body;
    const block = blockchain.addBlock({ data });
  
    res.status(201).json({ message: 'Added new block', block: block }); //201 = post 
    // OBS dåligt sätt att göra på!!
    // res.redirect('/api/1/blocks');
});

const PORT = 5001;

app.listen(PORT, () =>
  console.log(`Server is up and running on port: ${PORT}`)
); */