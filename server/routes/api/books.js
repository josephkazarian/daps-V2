const express = require('express');
const { MongoClient } = require("mongodb");

const router = express.Router();

//Get all books
router.get('/', async (req,res) => {
    const mongoDBInstance = await loadUserInformation();

    res.send(await mongoDBInstance.collection.find({}).toArray());
    mongoDBInstance.client.close();
});

//Get a book
router.get('/:id', async (req,res) => {
    const mongoDBInstance = await loadUserInformation();

    res.send(await mongoDBInstance.collection.find({_id: new mongodb.ObjectId(req.params.id)}).toArray());
    mongoDBInstance.client.close();
});


//Post a book
router.post('/', async (req,res) => {
    const mongoDBInstance = await loadUserInformation();
    await mongoDBInstance.collection.insertOne({
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
    mongoDBInstance.client.close();
})



async function loadUserInformation() {
    const client = new MongoClient('mongodb+srv://daps:dapsdaps123@cluster0.mis4y.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
    const connection = await client.connect();
    return {
        client,
        collection: connection.db('Cluster0').collection('books')
    }
}


module.exports = router;