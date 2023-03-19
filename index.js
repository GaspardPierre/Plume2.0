// CONFIGURATION DU SERVEUR***************************
require('dotenv').config();
const express = require('express');
const router = require('./app/router');
const app = express();
let session = require('express-session');
const cors = require('cors');
// L’import “morgan” sert à enregistrer les demandes HTTP d’une application Node.js pour le débogage et le suivi des erreurs.
const morgan = require('morgan');
const bodyParser = require('body-parser');

app.use(session( {
    secret: process.env.SESSION_SECRET,
    resave: true, //sauvegarde la session à chaque changement
    saveUninitialized: true,
    cookie: {
        maxAge: 2013210,
        sameSite:false,
        httpOnly:false
    }
}));

app.use(express.static('public'));
app.use(morgan('dev'));

const corsOptions = {
    origin: ['http://localhost:3000'],
    credentials: true,
    optionsSuccessStatus: 200   
};
app.use(cors(corsOptions));

app.use(bodyParser.json());

// facilite la récupération des données de la requête dans un objet JavaScript pour leur traitement dans l’application.

app.use(bodyParser.urlencoded({
    extended: true
  }));

//   afficher dans la console du serveur les informations de la session.

  app.use((req, res, next) => {
    console.log("my Mideweware", req.session);
    next();
  });

  app.use('/api', router);

  app.use(router);

  app.listen(port, () => {
    console.log(`http://localhost:${port}`);
  });