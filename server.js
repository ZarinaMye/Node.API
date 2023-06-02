//lektion 7 server.js = API delen 
const express = require('express');
const Blockchain = require('./Blockchain');

const app = express();
const blockchain = new Blockchain();

app.use(express.json()); //talar om att vi vill anvönda json mha inbyggt i express

//skapar endpoints
//Hämtar och listar blocken i kedjan
app.get('/api/1/blocks', (req, res) => {
    res.status(200).json(blockchain.chain); //200 = get
});

//Lägger till ett nytt block 
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
);



//const api_key = 4hW+37LGKqcFMv8506DaKA==JC1GrYusCFFhnIMf;
//const base_URL = https://api.api-ninjas.com/v1/riddles; 

//API ninja 