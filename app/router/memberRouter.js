const express = require ('express') ;
const router = express.Router();
const { memberController } = require ("../controllers/index");
const authenticateJWT = require('../service/authenticateJWT')
const security = require ('../service/security');





router.get('/', memberController.getAllMembers);
router.post('/addMember', memberController.addMember);
router.patch('/:id',authenticateJWT,security.checkAdmin, memberController.modifyMember);
router.delete("/:id",authenticateJWT, security.checkAdmin, memberController.deleteMember);
router.get('/:id',authenticateJWT, security.checkAdmin, memberController.getMember);


module.exports = router;
