const express = require("express");
const cookieParser = require("cookie-parser");
const routes = require("./routes/routes");
const pug = require("pug");
const path = require("path")
const bcrypt = require('bcryptjs');
const app = express();

app.set('view engine', "pug")
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, "/public")));
const urlendcodedParser = express.urlencoded({
    extended: false
});

app.get("/",routes.index)
app.get("/create", routes.create)
app.post('/create', urlencodedParser, routes.createUser);




app.listen(3000)