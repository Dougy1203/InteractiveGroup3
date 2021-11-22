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
    req.session.user = {
        isAuthenticated: true,
        username: "Test User"
    }
    res.redirect('/test')
    return;
});

app.get("/",routes.index)
app.get("/create", routes.create)
app.post('/create', urlendcodedParser, routes.createUser);

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