const express = require ('express') ;
const router = express.Router();
const { commentController } = require ("../controllers/index");
const security = require ('../service/security');
const authenticateJWT = require('../service/authenticateJWT');

router.get('/', commentController.getAllComments);
router.get('/:id', commentController.findAllWorkComments);
router.get('/:id', commentController.getComment);
router.post('/addComment', authenticateJWT,commentController.addComment);
router.patch('/:id', authenticateJWT,commentController.modifyComment);
router.delete("/:id",authenticateJWT,commentController.deleteComment);

module.exports = router;
