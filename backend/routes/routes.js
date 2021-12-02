const {MongoClient, ObjectId} = require('mongodb');
const bcrypt = require('bcryptjs');

// const url = 'mongodb://localhost:27017'; //LocalHost
const url = 'mongodb+srv://bob:zombie@cluster0.o9fdb.mongodb.net/Cluster0?retryWrites=true&w=majority'; //MongoAtlas
const client = new MongoClient(url);

const dbName = 'myData';
const db =  client.db(dbName);
const collection = db.collection('Users');

let crunchyPBCounter = 0;
let creamyPBCounter = 0;
let appleCounter = 0;
let androidCounter = 0;
let StarWarsCounter = 0;
let StarTrekCounter = 0;
let LordOfTheRingsCounter = 0;
let HarryPotterCounter = 0;
const getTodaysDate = () =>{
    let currentDate = new Date();
    let cDay = currentDate.getDate();
    let cMonth = currentDate.getMonth() + 1;
    let cYear = currentDate.getFullYear();
    let date = cMonth+"/"+cMonth+"/"+cYear;
    console.log(date);
    return date;
}

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
    let salt = bcrypt.genSaltSync(10);
    let hash = bcrypt.hashSync(req.body.password, salt);
    console.log(salt);
    console.log(hash);
    let user = {
        userName: req.body.userName,
        password: hash,
        email: req.body.email,
        age: req.body.age,
        admin: false,
        securityQuestion1: req.body.question1,
        securityQuestion2: req.body.question2,
        securityQuestion3: req.body.question3
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
        user: filteredDocs,
    });
};

exports.editUser = async (req, res) => {
    await client.connect();
    const updateResult = await collection.updateOne(
        {_id: ObjectId(req.params.id)},
        { $set: {
            userName: req.body.userName,
            password: req.body.password,
            email: req.body.email,
            age: req.body.age,
            securityQuestion1: req.body.question1,
            securityQuestion2: req.body.question2,
            securityQuestion3: req.body.question3
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
    let filteredDocs;
    console.log(req.params.id)
    filteredDocs = await collection.findOne({userName: req.params.id});
    if(filteredDocs == null){
        filteredDocs = await collection.findOne({_id: ObjectId(req.params.id)});
    }
    client.close();
    console.log(await req.cookies.LastVisit);
    res.render('details', {
        title: `${filteredDocs.userName}'s Details`,
        user: filteredDocs,
        cookie: req.cookies
    })
};


exports.logincheck = async (req,res)=> {
    //Check if its empty
    let username = await req.body.userName;
    let password = await req.body.password;
    if(username == null || password==null){
        res.redirect("/login")
    }
    console.log(`${username} and ${password}`)
    let correctPass = false;

    //Now finding user in the database
    await client.connect();
    const filteredDocs = await collection.findOne({
        userName: username
    });
    client.close();
    if(filteredDocs==null){ //No user
        res.redirect("/login")
    }
    console.log(`Filtered Docs: ${filteredDocs.admin}`)
    //Found a user
    correctPass = bcrypt.compareSync(password,filteredDocs.password); //check password
    if (!correctPass) { //Password isnt right
        console.log("Incorrect")
        res.redirect("/login");
    }
    res.clearCookie("admin");
    res.cookie("LastVisit",getTodaysDate(), { maxAge: 99999999999999999});
    res.cookie("admin", filteredDocs.admin, { maxAge: 999999999});
    //SESSION OBJECT
    //THIS OBJECT IS ACCESSABLE ANYWHERE ON THE DOMAIN
    req.session.user = {
        isAuthenticated: true,
        username: req.body.username
    }
    
    console.log(`Correct: ${username} and ${password}`)
    res.redirect(`details/${username}`)
}

exports.api = async(req, res) => {
    await client.connect();
    const findQuestion1 = await collection.find({securityQuestion1: req.query.securityQuestion1}).toArray();
    const findQuestion2 = await collection.find({securityQuestion2: req.query.securityQuestion2}).toArray();
    const findQuestion3 = await collection.find({securityQuestion3: req.query.securityQuestion3}).toArray();
    client.close();
    if(req.query.amount != undefined){
        console.log(json(findQuestion1));
        res.json(findQuestion1);
    }
}
