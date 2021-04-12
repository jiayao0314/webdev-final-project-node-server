// TODO: review https://expressjs.com/
const express = require('express')
const app = express()
app.use(express.json())

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
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
        'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
});


require("./controllers/user-controller")(app)
require("./controllers/profile-controller")(app)


app.listen(3000)
console.log("node server is running!")