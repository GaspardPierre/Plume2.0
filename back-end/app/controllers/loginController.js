const { memberModel } = require("../models");
const bcrypt = require("bcrypt");
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

            delete member.password;

            if (member.id) {
                req.session.user = { id: member.id };
                req.session.role = member.role;
                console.log(`Après connexion, req.session: ${JSON.stringify(req.session)}`);
            }

            res.status(200).json({ member });
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: "Une erreur est survenue lors de la vérification de l'utilisateur." });
        }
    },

    async logout(req, res) {
        try {
            req.session.destroy((err) => {
                if (err) {
                    throw err;
                }
                res.status(200).send({ message: "Logout successful" });
            });
        } catch (err) {
            console.error(err);
            res.status(500).send({ error: "Failed to logout" });
        }
    }
};

module.exports = loginControlleur;
