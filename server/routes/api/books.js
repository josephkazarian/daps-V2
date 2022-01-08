const express = require('express');
const { MongoClient, ObjectID  } = require("mongodb");

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

    res.send(await mongoDBInstance.collection.find({_id: new ObjectID(req.params.id)}).toArray());
    mongoDBInstance.client.close();
});


//Post a book
router.post('/', async (req,res) => {
    const mongoDBInstance = await loadUserInformation();
    await mongoDBInstance.collection.insertOne(
        req.body
    );
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