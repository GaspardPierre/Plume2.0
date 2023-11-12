const express = require('express');
const router = require('./app/router');
const session = require('express-session');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

// Configuration des variables d'environnement en fonction de l'environnement
if (process.env.NODE_ENV === 'production') {
    dotenv.config({ path: '.env.production' });
} else {
    dotenv.config({ path: '.env.development' });
}

const app = express();
const port = process.env.PORT || 3000;

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: {
        maxAge: 2013210,
        sameSite: false,
        httpOnly: false
    }
}));

app.use(express.static('public'));
app.use(morgan('dev'));

const corsOptions = {
    origin: ['http://localhost:5173'],
    credentials: true,
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use((req, res, next) => {
    console.log("my Middleware", req.session);
    next();
});

app.use('/api', router);

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
