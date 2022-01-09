const express = require('express');
const { MongoClient, ObjectID  } = require("mongodb");

const router = express.Router();

//Get all user orders
router.get('/:buyerID', async (req,res) => {
    const mongoDBInstance = await loadOrderInformation();
    res.send(await mongoDBInstance.collection.find({buyerID: req.params.buyerID}).toArray());
    mongoDBInstance.client.close();
});


//Get user last order
router.get('/last/:buyerID', async (req,res) => {
    const mongoDBInstance = await loadOrderInformation();
    res.send(await (await mongoDBInstance.collection.find({buyerID: req.params.buyerID}).toArray()).pop());
    mongoDBInstance.client.close();
});


//Post an order
router.post('/order', async (req,res) => {
    let mongoDBInstance = await loadOrderInformation();
    await mongoDBInstance.collection.insertOne(
        req.body
    );
    mongoDBInstance.client.close();


    req.body.boughtItems.forEach(async (bookID) => {
        mongoDBInstance = await loadBookInformation();
        const filter = { _id: new ObjectID(bookID)  };
        const updateDoc = {
            $set: {"sold":true},
          };
    
          const options = { upsert: true };
    
        await mongoDBInstance.collection.updateOne(filter, updateDoc, options);
        mongoDBInstance.client.close();
    })
    res.status(201).send();
})


async function loadOrderInformation() {
    const client = new MongoClient('mongodb+srv://daps:dapsdaps123@cluster0.mis4y.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
    const connection = await client.connect();
    return {
        client,
        collection: connection.db('Cluster0').collection('orders')
    }
}

async function loadBookInformation() {
    const client = new MongoClient('mongodb+srv://daps:dapsdaps123@cluster0.mis4y.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
    const connection = await client.connect();
    return {
        client,
        collection: connection.db('Cluster0').collection('books')
    }
}


module.exports = router;