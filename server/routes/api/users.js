const express = require('express');
const mongodb = require('mongodb');
const { createHash } = require('crypto');

function hash(string) {
  return createHash('sha256').update(string).digest('hex');
}

const router = express.Router();

router.get('/:id', async (req,res) => {
    const users = await loadUserInformation();

    res.send(await users.find({_id: new mongodb.ObjectId(req.params.id)}).toArray());
});

router.post('/register', async (req,res) => {
    const users = await loadUserInformation();
    await users.insertOne({
        username: req.body.username,
        password: hash(req.body.password)
    });
    res.status(201).send();
})



async function loadUserInformation() {
    const client = await mongodb.MongoClient.connect('mongodb+srv://daps:dapsdaps123@cluster0.mis4y.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
        useNewUrlParser: true
    });

    return client.db('Cluster0').collection('users');
}


module.exports = router;