const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();

//Middleware
app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors());

const users = require('./routes/api/users');
app.use('/api/users', users);

const books = require('./routes/api/books');
app.use('/api/books', books);

const orders = require('./routes/api/orders');
app.use('/api/orders', orders);

process.env.NODE_ENV = 'production'
// Handle production
if(process.env.NODE_ENV === 'production') {

    //Static folder 
    app.use(express.static(__dirname + '/public'));
    app.get('/userimages/:image', (req, res) => res.sendFile(path.join(__dirname, '../uploads/userImages/' + req.params.image)));
    app.get('/bookImages/:image', (req, res) => res.sendFile(path.join(__dirname, '../uploads/bookImages/' + req.params.image)));
    //Handle Singe Page application
    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server Started on port ${port}`));