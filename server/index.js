const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//Middleware
app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors());

const users = require('./routes/api/users');
app.use('/api/users', users);

const books = require('./routes/api/books');
app.use('/api/books', books);

/*Image Uploading*/
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function(req, file, callback) {
    callback(null, '/src/my-images');
  },
  filename: function (req, file, callback) {
    callback(null, file.fieldname);
  }
});

// import morgan from 'morgan';
// import express from 'express';
// const multer = require('multer');
// const upload = multer({dest: 'uploads/'});

// app.use(express.json());
// app.use(express.urlencoded({extended: true}));
// app.use(morgan('dev'));

// app.use(express.static(__dirname, 'public'));
/* End image uploading*/

// Handle production
if(process.env.NODE_ENV === 'production') {

    //Static folder
    app.use(express.static(__dirname + '/public'));

    //Handle Singe Page application
    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server Started on port ${port}`));