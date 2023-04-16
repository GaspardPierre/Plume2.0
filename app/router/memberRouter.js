const express = require ('express') ;
const router = express.Router();
const { memberRouter, memberController } = require ("../controllers/index");
const security = require ('../service/security');



//***MISE EN PLACE DE RESTRICTION avec attribution de roles (Admin=checkAdmin,  ) d'utilisation de fonctionalités" SUR LES ROUTES***
router.get('/', security.checkAdmin, memberController.getAllMember);

router.post('/addMember', memberController.addMember);

router.get('/:id', security.checkAdmin, memberController.getMember);

router.patch('/:id', security.checkAdmin, memberController.modifyMember);

router.delete("/:id", security.checkAdmin, memberController.deleteMember);

module.exports = router;