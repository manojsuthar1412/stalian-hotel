
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');


const { mongoose } = require('./db');

var queryController = require('./queryController');
var roomController = require('./roomController');

const PORT = process.env.PORT || 3000;


//MIDDLE WARES
let app = express();
app.use(bodyParser.json());
app.use(cors());

app.use(express.static(path.join(__dirname, 'dist')));

app.get('', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'))
})


app.use('/rooms', roomController);

app.use('/query', queryController);

app.get('/*', (req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'dist/index.html'));
});


app.listen(PORT, () => console.log(`server started on port ${PORT}`));
