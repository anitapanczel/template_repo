const express = require('express')
require("express-async-errors");
const cors = require('cors');
const auth = require("./middlewares/auth");
const errorhandler = require("./middlewares/errorhandler");
const dashboardRoutes = require('./routes/dashboard.js');
const userRoutes = require('./routes/user.js');
const morgan = require('morgan')

const app = express();
const config = process.env;

app.use(
    cors({
        origin: config.APP_URL
    })
);

app.use(express.json());

app.use(
    morgan(':method :url :status :res[content-length] :req[header] - :response-time ms')
);

app.use('/api/dashboards', dashboardRoutes);
app.use('/api/user', userRoutes);

app.get('/api/public', (req, res) => {
    console.log("public");
    res.json("Hello world public");
});

app.get('/api/private', auth({ block: true }), (req, res) => {
    console.log('runs app.js line 47')
    if (!res.locals.user.userid) return res.sendStatus(401);
    console.log("private");
    res.json(`Hello world private ${res.locals.user.userid} `);
});

app.get('/api/both', auth({ block: false }), (req, res) => {
    console.log("both");
    if (!res.locals.user.userid) res.send("Hello world public");
    res.json(`Hello world public and also private ${res.locals.user.userid} `);
});



app.use(errorhandler);


module.exports = app;