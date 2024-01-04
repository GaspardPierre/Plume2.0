// CONFIGURATION DES ROUTES*******************************

const express = require("express");
const loginRouter = require ("./loginRouter");
const memberRouter = require ("./memberRouter");
const workRouter = require ("./workRouter");
const labelRouter = require ("./labelRouter");
const commentRouter = require ("./commentRouter");
const noteRouter = require ("./noteRouter");


const router = express.Router();
router.use("/login", loginRouter) ;
router.use("/member", memberRouter) 
router.use("/work", workRouter) ;
router.use("/label", labelRouter) ;
router.use("/comment", commentRouter) ;
router.use("/note", noteRouter) ;



module.exports = router;



