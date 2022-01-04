const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//Middleware
app.use(bodyParser.json());
app.use(cors());

const users = require('./routes/api/users');
app.use('/api/users', users);

const books = require('./routes/api/books');
app.use('/api/books', books);

// Handle production
if(process.env.NODE_ENV === 'production') {

    //Static folder
    app.use(express.static(__dirname + '/public'));

    //Handle Singe Page application
    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server Started on port ${port}`));