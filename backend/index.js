const express = require("express");
const expressSession = require("express-session");
const cookieParser = require("cookie-parser");
const routes = require("./routes/routes");
const pug = require("pug");
const path = require("path")
const bcrypt = require('bcryptjs');
const app = express();

const urlendcodedParser = express.urlencoded({
    extended: false
});
//Doesnt matter the value
app.use(cookieParser("encryptionKey"))
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
    res.redirect("/");
}


app.set('view engine', "pug")
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, "/public")));


app.get("/", routes.index);

app.get("/login", (req, res) => {
    res.render("login");
    return;
});

//ALL OF THIS SHOULD BE IN ROUTES I THINK
app.post('/login', urlendcodedParser, (req, res) => {
    console.log(req.body.username);

    //CHECK IF ITS CORRECT LOGIN
    if (req.body.username == "user" && req.body.password == "pass") {
        //SESSION OBJECT
        //THIS OBJECT IS ACCESSABLE ANYWHERE ON THE DOMAIN
        req.session.user = {
            isAuthenticated: true,
            username: req.body.username
        }
        res.redirect("/loggedInpage");
        return;
    }
    res.redirect("/rejected");
});

app.get("/private", checkAuth, (req, res) => {
    res.send("Welcome to the private page");
})


app.get("/",routes.index)
app.get("/create", routes.create)
app.post("/create", urlendcodedParser, routes.createUser);


app.get("/logout", (req, res) => {
    req.session.destroy(err => {
        if (err) {
            console.log(err);
        } else {
            res.redirect("/");
        }
    });
});



app.listen(3000)