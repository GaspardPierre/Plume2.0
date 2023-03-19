const { utilisateurModel } = require("../models");
const bcrypt = require("bcrypt");

const utilisateurController = {

    async getAllUtilisateurs(req,res) {

        const utilisateurs = await utilisateurModel.findAll();
        res.json(utilisateurs);
    },
    async addUtilisateur(req,res) {
        const { pseudo, email, password } = req.body;
        console.log(req.body);
        const utilisateur = await utilisateurModel.findByEmail(email);
        if (utilisateur) {
            return res.status(401).json({ message: "Utilisateur existe déjà" });
        }

        // On génère un salt pour le mot de passe pour sécuriser le hachage , avant de le stocker en BDD
        const salt = await bcrypt.genSalt(10);

        const newUtilisateur= {
            pseudo : pseudo,
            email : email,
            password : await bcrypt.hash(password, salt),
            role : "utilisateur"
        };

    const utilisateurDb = await utilisateurModel.insert(newUtilisateur);

    res.status(200).json(utilisateurDb);
    },

    async getUtilisateur(req,res) {
        await utilisateurModel.findById(req.params.id);
        if(!utilisateur) {
            res.status(404).json({ message: `Utilisateur introuvable pour l'id : ${req.params.id}` });
        }
        res.status(200).json(utilisateur);
    },

    async  modifyUtilisateur(req, res) {
        const utilisateurId = req.params.id;
        const utilisateurUpdates = req.body;
      
        const utilisateur = await utilisateurModel.findById(utilisateurId);
      
        // Vérifie si l'utilisateur existe
        if (!utilisateur) {
          return res.status(404).json({ message: "L'utilisateur n'existe pas" });
        }
      
        // Met à jour les propriétés de l'utilisateur avec les valeurs fournies dans le corps de la requête
        for (const key in utilisateurUpdates) {
          utilisateur[key] = utilisateurUpdates[key];
        }
      
        const updatedUtilisateur = await utilisateur.save();
      
        res.json(updatedUtilisateur);
      },

      async deleteMember(req, res) {
        const utilisateurId = req.params.id;
        const deletedUtilisateur = await memberModel.delate(utilisateurId);
      
        if (!deletedUtilisateur)  {
          return res.status(404).json({ message: "Membre introuvable" });
        }
      
        res.json({ message: "Membre supprimé avec succès" });
      }
      
}
