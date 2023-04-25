// CONFIGURATION DES ROUTES*******************************

const express = require("express");
const loginRouter = require ("./loginRouter");
const memberRouter = require ("./memberRouter");
const workRouter = require ("./workRouter");
const labelRouter = require ("./labelRouter");

const router = express.Router();
router.use("/login", loginRouter) ;
router.use("/member", memberRouter) 
router.use("/work", workRouter) ;
router.use("/label", labelRouter) ;


module.exports = router;



