const express = require ('express') ;
const router = express.Router();
const { noteController } = require ("../controllers/index");
const security = require ('../service/security');

router.get('/', noteController.findAllNotes);
router.post('/addNote', noteController.addNote);
router.get('/:id', noteController.getNote);
router.patch('/:id', noteController.modifyNote);
router.delete("/:id", noteController.deleteNote);

module.exports = router;