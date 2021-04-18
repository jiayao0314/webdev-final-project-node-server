// TODO: review https://expressjs.com/
const express = require('express')
const app = express()
app.use(express.json())
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const mongoose = require('mongoose');
// <username>:<password>@<mongodbClusterName>/<db>
mongoose.connect('mongodb+srv://userWebdev:5610@clusterwebdevfinal.nlvkz.mongodb.net/webdev-final-project',
    {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});

const session = require('express-session')
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    // cookie: { secure: true }
}))


// configure CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3001');
    res.header('Access-Control-Allow-Headers',
        'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

require("./controllers/user-controller")(app)
require("./controllers/profile-controller")(app)
require("./controllers/review-controller")(app)

app.listen(3000)
console.log("node server is running!")
