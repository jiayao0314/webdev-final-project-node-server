require('dotenv').config()
const express = require('express')
const app = express()
app.use(express.json())

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const mongoose = require('mongoose');

const mongoAtlasUri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@clusterwebdevfinal.nlvkz.mongodb.net/webdev-final-project`
try {
    mongoose.connect(mongoAtlasUri,
        {useNewUrlParser: true, useUnifiedTopology: true},
        () => console.log('connected'));
} catch (e) {
    console.log('could not connect', e);
}

const session = require('express-session')
// const MongoStore = require('connect-mongo');
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
    // store: MongoStore.create({
    //     mongoUrl: 'mongodb+srv://userWebdev:5610@clusterwebdevfinal.nlvkz.mongodb.net/webdev-final-project'})
}))


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
require("./controllers/review-controller")(app)

app.listen(3000)
console.log("node server is running!")
