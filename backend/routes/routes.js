const {MongoClient, ObjectId} = require('mongodb');

// const url = 'mongodb://localhost:27017'; //LocalHost
const url = 'mongodb+srv://bob:zombie@cluster0.o9fdb.mongodb.net/Cluster0?retryWrites=true&w=majority'; //MongoAtlas
const client = new MongoClient(url);

const dbName = 'myData';
const db =  client.db(dbName);
const collection = db.collection('Users');

exports.index = async (req, res) => {
    await client.connect();
    const findResult = await collection.find({}).toArray();
    console.log('Found Documents => ', findResult);
    client.close();
    //RES.RENDER Should have the INDEX/HOME page
    res.render('index', {
        title: 'User List',
        people: findResult
    });
};

exports.create = (req, res) => {
    //RES.RENDER should have the CREATE USER page
    res.render('create', {
        title: 'Add User'
    });
};

exports.createUser = async (req, res) => {
    await client.connect();
    let user = {
        userName: req.body.userName,
        password: req.body.password,
        email: req.body.email,
        age: req.body.age,
        securityQuestion1: req.body.securityQuestion1,
        securityQuestion2: req.body.securityQuestion2,
        securityQuestion3: req.body.securityQuestion3
    }
    const insertResult = await collection.insertOne(user);
    client.close();
    res.redirect('/');
};

exports.edit = async (req, res) => {
    await client.connect();
    const filteredDocs = await collection.findOne(ObjectId(req.params.id));
    client.close();
    res.render('edit', {
        title: "Edit User",
        person: filteredDocs,
    });
};

exports.editPerson = async (req, res) => {
    await client.connect();
    const updateResult = await collection.updateOne(
        {_id: ObjectId(req.params.id)},
        { $set: {
            name: req.body.name,
            age: req.body.age,
            species: req.body.species,
            image: req.body.image
        }}
    )
    client.close();
    res.redirect('/');
};

exports.delete = async (req, res) => {
    await client.connect();
    const deleteResult = await collection.deleteOne({_id: ObjectId(req.params.id)});
    client.close();
    res.redirect('/');
};

exports.details = async (req, res) => {
    await client.connect();
    const filteredDocs = await collection.findOne({_id: ObjectId(req.params.id)});
    client.close();
    res.render('details', {
        title: `${filteredDocs.userName}'s Details`,
        user: filteredDocs
    })
};
exports.index = (req, res) => {
    res.send("Alive");
}
