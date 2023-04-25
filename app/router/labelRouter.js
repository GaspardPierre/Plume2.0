const express = require('express');
const { labelController } = require('../controllers/index');
const router = express.Router();
const security = require('../service/security');
// All routes are prefixed with /label

router.get('/', labelController.getAllLabels);
router.post('/addLabel', security.checkAdmin ,labelController.addLabel);
router.get('/:id', labelController.getLabel);
router.patch('/:id', security.checkAdmin, labelController.modifyLabel);

module.exports = router;