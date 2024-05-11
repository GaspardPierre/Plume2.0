const { memberModel } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
require("dotenv").config();

const loginControlleur = {

    async checkMember(req, res) {
        try {
            console.log(req.body);
            const { email, password } = req.body;
            const member = await memberModel.findByEmail(email);

            if (!member) {
                return res.status(404).json({ message: "Utilisateur non trouvé" });
            }

            const isPasswordValid = await bcrypt.compare(password, member.password);

            if (!isPasswordValid) {
                return res.status(401).json({ message: "Mot de passe incorrect" });
            }

            const token = jwt.sign(
                { id: member.id, role: member.role, email: member.email,pseudo: member.pseudo},
                process.env.JWT_SECRET,
                { expiresIn: process.env.JWT_EXPIRATION || '1h' } // Utiliser une valeur par défaut si non spécifiée
            );
            

    
            res.status(200).json({ message: "Connexion réussie", token });
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: "Une erreur est survenue lors de la vérification de l'utilisateur." });
        }
    },
    async logout(req, res) {
       
        res.status(200).send({ message: "Déconnexion réussie. Supprimez le token côté client." });
    }
    
};

module.exports = loginControlleur;
