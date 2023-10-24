const express = require ('express') ;
const router = express.Router();
const { commentController } = require ("../controllers/index");
const security = require ('../service/security');

router.get('/:id', commentController.findAllWorkComments);
router.post('/addComment', security.checkUser, commentController.addComment);
router.get('/:id', commentController.getComment);
router.patch('/:id', commentController.modifyComment);
router.delete("/:id", commentController.deleteComment);

module.exports = router;
