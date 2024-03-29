const express = require("express");
const expressSession = require("express-session");
const cookieParser = require("cookie-parser");
const routes = require("./routes/routes");
const pug = require("pug");
const path = require("path")
const bcrypt = require('bcryptjs');

const app = express();

const getTodaysDate = () =>{
    let currentDate = new Date();
    let cDay = currentDate.getDate();
    let cMonth = currentDate.getMonth() + 1;
    let cYear = currentDate.getFullYear();
    let date = cMonth+"/"+cMonth+"/"+cYear;
    console.log(date);
    return date;
}

const urlencodedParser = express.urlencoded({
    extended: false
});
//Doesnt matter the value
//COOKIE INFORMATION
let currentDate = getTodaysDate();
app.use(cookieParser("imASecretTheSeedValueUsedToEncrypt"))
app.use(expressSession({
    secret: 'imASecretTheSeedValueUsedToEncrypt',
    saveUninitialized: true,
    resave: true
}));

const checkAuth = (req, res, next) => {
    if (req.session.user && req.session.user.isAuthenticated) {
        next();
        return
    }
    res.redirect("/login");
}

const isAdmin = (req,res,next)=>{
    let isAdmin = req.cookies.admin;
    console.log(`Is user an admin: ${isAdmin}`);
    if(isAdmin == "true"){
        next();
        return
    }
    res.redirect("/login");
}


app.set('view engine', "pug")
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, "/public")));

app.get("/", isAdmin ,routes.index);

app.get("/login", (req, res) => {
    res.render("login");
    return;
});

//ALL OF THIS SHOULD BE IN ROUTES I THINK
app.post('/login', urlencodedParser, routes.logincheck);

app.get("/private", checkAuth, (req, res) => {
    res.send("Welcome to the private page");
})

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get("/api",routes.api);
app.get("/create", routes.create);
app.post("/create", urlencodedParser, routes.createUser);
app.get('/edit/:id', routes.edit);
app.post('/edit/:id', urlencodedParser, routes.editUser);
app.get('/delete/:id', routes.delete);
app.get('/details/:id', routes.details);
app.get("/makeAdmin/:id",routes.makeAdmin);
app.get("/removeAdmin/:id",routes.removeAdmin);
app.get("/logout", (req, res) => {
    req.session.destroy(err => {
        if (err) {
            console.log(err);
        } else {
            res.redirect("/login");
        }
    });
});


app.listen(3000);
