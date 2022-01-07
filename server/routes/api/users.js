const express = require('express');
const mongodb = require('mongodb');
const { createHash } = require('crypto');
const { json } = require('body-parser');
const { create } = require('domain');
const fs =  require('fs')

const multer = require('multer');
const upload = multer({dest: 'uploads/'});

function hash(string) {
  return createHash('sha256').update(string).digest('hex');
}

function createResponse(hasSucceed,message = "",responseObject = null) {
    return {
        hasSucceed,
        message,
        responseObject
    }
}

const router = express.Router();

router.get('/:id', async (req,res) => {
    const users = await loadUserInformation();
    var result = await users.find({_id: new mongodb.ObjectId(req.params.id)}).toArray();
    if (result.length !== 0) {
        delete result[0].password;
        res.send(createResponse(true,"",result));
    } else {
        res.send(createResponse(false,"User Not Found",null));
    }
    
});

router.post('/register', async (req,res) => {
    const users = await loadUserInformation();

    var userIsInDatabase = await users.find({
        username: req.body.username
    }).toArray();
    if (userIsInDatabase.length === 0) {
        await users.insertOne({
            username: req.body.username,
            password: hash(req.body.password),
            email: req.body.email
        });
        res.send(createResponse(true,"User Created"));
    } else {
        res.send(createResponse(false,"User Already exists!"));
    }
    res.status(201).send();
})

router.post('/login', async (req,res) => {
    const users = await loadUserInformation();
    var result = await users.find({
        username: req.body.username,
        password:hash(req.body.password)
    }).toArray();
    if (result.length !== 0) {
        res.send(createResponse(true,"",{ "_id": result[0]._id , "username": result[0].username }));
    } else {
        res.send(createResponse(false,"Couldn't log in",result))
    }
    res.status(201).send();
})

router.post('/updateUserInfo', async (req,res) => {
    const users = await loadUserInformation();

    const filter = { _id: new mongodb.ObjectId(req.body.id)  };
    const updateDoc = {
        $set: req.body.userObject,
      };

      const options = { upsert: true };

    var result = await users.updateOne(filter, updateDoc, options);
    res.send(createResponse(true,"User has been updated", result));
    res.status(201).send();
})

router.post('/uploadUserPhoto', async (req,res) => {
    let a =  req.body.imageBase64;
    let m =  a.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
    let b =  Buffer.from(m[2],'base64');
    fs.writeFile(`server/userImages/${req.body.fileName}`,b,function(err){
      if(!err){
        console.log("file is created");
      } else {
          console.log(err);
      }
    });

    const users = await loadUserInformation();

    const filter = { _id: new mongodb.ObjectId(req.body.id)  };
    const updateDoc = {
        $set: {
            profilePicture: req.body.fileName
        },
      };

      const options = { upsert: true };

    var result = await users.updateOne(filter, updateDoc, options);
    res.send(createResponse(true,"User has been updated", result));
    res.status(201).send();
})


async function loadUserInformation() {
    const client = await mongodb.MongoClient.connect('mongodb+srv://daps:dapsdaps123@cluster0.mis4y.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
        useNewUrlParser: true
    });

    return client.db('Cluster0').collection('users');
}


module.exports = router;