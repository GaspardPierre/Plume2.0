// CONFIGURATION DES ROUTES*******************************

const express = require("express");
const loginRouter = require ("./loginRouter");
const memberRouter = require ("./memberRouter");
const workRouter = require ("./workRouter");

const router = express.Router();
router.use("/login", loginRouter) ;
router.use("/member", memberRouter) 
router.use("/work", workRouter) ;


module.exports = router;



