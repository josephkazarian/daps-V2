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

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server Started on port ${port}`));