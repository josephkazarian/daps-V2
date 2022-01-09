const express = require('express');
const { MongoClient, ObjectID  } = require("mongodb");
const fs =  require('fs')

const router = express.Router();

function createResponse(hasSucceed,message = "",responseObject = null) {
    return {
        hasSucceed,
        message,
        responseObject
    }
}

//Get all books
router.get('/', async (req,res) => {
    const mongoDBInstance = await loadBookInformation();

    res.send(await mongoDBInstance.collection.find({}).toArray());
    mongoDBInstance.client.close();
});

//Get a book
router.get('/:id', async (req,res) => {
    const mongoDBInstance = await loadBookInformation();

    res.send(await mongoDBInstance.collection.find({_id: new ObjectID(req.params.id)}).toArray());
    mongoDBInstance.client.close();
});


//Post a book
router.post('/', async (req,res) => {
    const mongoDBInstance = await loadBookInformation();
    let result = await mongoDBInstance.collection.insertOne(
        req.body
    );
    res.send(createResponse(true,"Book Posted",result));
    res.status(201).send();
    mongoDBInstance.client.close();
})

router.post('/uploadBookPhoto', async (req,res) => {
    let a =  req.body.imageBase64;
    let m =  a.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
    let b =  Buffer.from(m[2],'base64');
    fs.writeFile(`server/bookImages/${req.body.fileName}`,b,function(err){
      if(!err){
        console.log("file is created");
      } else {
          console.log(err);
      }
    });

    const mongoDBInstance = await loadBookInformation();

    const filter = { _id: new ObjectID(req.body.id)  };
    const updateDoc = {
        $set: {
            img: req.body.fileName
        },
      };

      const options = { upsert: true };

    var result = await mongoDBInstance.collection.updateOne(filter, updateDoc, options);
    res.send(createResponse(true,"Photo has been updated", result));
    res.status(201).send();
    mongoDBInstance.client.close();
})

async function loadBookInformation() {
    const client = new MongoClient('mongodb+srv://daps:dapsdaps123@cluster0.mis4y.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
    const connection = await client.connect();
    return {
        client,
        collection: connection.db('Cluster0').collection('books')
    }
}


module.exports = router;