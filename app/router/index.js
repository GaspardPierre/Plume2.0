// CONFIGURATION DES ROUTES*******************************

const express = require("express");
const loginRouter = require ("./loginRouter");
const utilisateurRouter = require ("./utilisateurRouter");
const oeuvreRouter = require ("./oeuvreRouter");

const router = express.Router();
router.use("/login", loginRouter) ;
router.use("/utilisateur", utilisateurRouter) 
router.use("/oeuvre", oeuvreRouter) ;


module.exports = router;



