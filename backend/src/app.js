const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');


const port = 3000;
const app = express();

app.use(cors());
app.use(bodyParser.json());


app.get('/', (req, res, next)=>{
    res.send('<h1>jeje</h1>')
});






app.listen(port, ()=>{
    console.log(`Server running at: ${port}`);
});