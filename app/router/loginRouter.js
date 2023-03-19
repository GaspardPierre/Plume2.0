const express = require('express');
const router = express.Router();
const { loginController } = require('../controllers/index');

router.post( '/', loginController.checkUtilisateur);

module.exports = router;