require('dotenv').config()
const express = require('express')
const app = express()
app.use(express.json())

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const mongoose = require('mongoose');

const mongoAtlasUri = process.env.MONGODB_URI;

try {
    mongoose.connect(mongoAtlasUri,
        {useNewUrlParser: true, useUnifiedTopology: true},
        () => console.log('connected'));
} catch (e) {
    console.log('could not connect', e);
}

const session = require('express-session')
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}))


app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', `${process.env.ALLOW_ORIGIN}`);
    res.header('Access-Control-Allow-Headers',
        'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

require("./controllers/user-controller")(app)
require("./controllers/review-controller")(app)
require("./controllers/favorite-controller")(app)

app.listen(process.env.PORT || 3000)
console.log("node server is running!")
