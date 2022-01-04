const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

//Get all books
router.get('/', async (req,res) => {
    const books = await loadUserInformation();

    res.send(await books.find({}).toArray());
});

//Get a book
router.get('/:id', async (req,res) => {
    const books = await loadUserInformation();

    res.send(await books.find({_id: new mongodb.ObjectId(req.params.id)}).toArray());
});


//Post a book
router.post('/', async (req,res) => {
    const books = await loadUserInformation();
    await books.insertOne({
        Name: req.body.Name,
        ISBN: req.body.ISBN,
        Author: req.body.Author,
        Release: req.body.Release,
        PublishingHouse: req.body.PublishingHouse,
        Conditions_ID: req.body.Conditions_ID,
        Accounts_ID: req.body.Accounts_ID,
        img: req.body.img,
    });
    res.status(201).send();
})



async function loadUserInformation() {
    const client = await mongodb.MongoClient.connect('mongodb+srv://daps:dapsdaps123@cluster0.mis4y.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
        useNewUrlParser: true
    });
    return client.db('Cluster0').collection('books');
}


module.exports = router;