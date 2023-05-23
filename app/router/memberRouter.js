const express = require ('express') ;
const router = express.Router();
const { memberController } = require ("../controllers/index");

const security = require ('../service/security');



//***MISE EN PLACE DE RESTRICTION avec attribution de roles (Admin=checkAdmin,  ) d'utilisation de fonctionalités" SUR LES ROUTES***
router.get('/', memberController.getAllMembers);


router.post('/addMember', memberController.addMember);



console.log("route get member")

router.patch('/:id', security.checkAdmin, memberController.modifyMember);
console.log("route modify member")

router.delete("/:id", security.checkAdmin, memberController.deleteMember);

router.get('/:id', security.checkAdmin, memberController.getMember);

console.log("route delete member")

module.exports = router;