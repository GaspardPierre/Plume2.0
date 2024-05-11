const express = require ('express') ;
const router = express.Router();
const { noteController } = require ("../controllers/index");
const security = require ('../service/security');
const authenticateJWT = require('../service/authenticateJWT');

router.get('/', noteController.findAllNotes);
router.post('/addNote',authenticateJWT,noteController.addNote);
router.get('/:id', noteController.getNote);
router.patch('/:id',authenticateJWT, noteController.modifyNote);
router.delete("/:id",authenticateJWT,noteController.deleteNote);

module.exports = router;