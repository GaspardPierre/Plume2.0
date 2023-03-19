const express = require ('express') ;
const router = express.Router();
const { utilisateurRouter, utilisateurController } = require ("../controllers/index");
const security = require ('../service/security');



//***MISE EN PLACE DE RESTRICTION avec attribution de roles (Admin=checkAdmin,  ) d'utilisation de fonctionalités" SUR LES ROUTES***
router.get('/', security.checkAdmin, utilisateurController.getAllUtilisateurs);

router.post('/addUtilisateur', utilisateurController.addUtilisateur);

router.get('/:id', security.checkAdmin, utilisateurController.getUtilisateur);

router.patch('/:id', security.checkAdmin, utilisateurController.modifyUtilisateur);

router.delete("/:id", security.checkAdmin, utilisateurController.deleteUtilisateur);

module.exports = router;