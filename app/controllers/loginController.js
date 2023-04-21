const { utilisateurModel } = require("../models");
const bcrypt = require("bcrypt");
require("dotenv").config();

const loginControlleur = {

	async checkMember(req, res) {

		console.log(req.body);
		const { email, password } = req.body;
		const utilisateur = await utilisateurModel.findByEmail(email);

		if (!utilisateur) {
			return res.status(404).json({ message: "Utilisateur non trouvé" });
		}
		// fonction qui permet de comparer le mot de passe et le mot de passe stocqué dans la BDD pour l'itilisateur trouvé.

		const isPasswordValid = await bcrypt.compare(
			password,
			utilisateur.password
		);

		if (!isPasswordValid) {
			return res.status(401).json({ message: "Mot de passe incorrect" });
		}
		// On  retire le mdp de l'objet utilisateur pas de la BDD.
		delete utilisateur.password;
		// On enregistre l'utilisateur en session
		req.session.user = utilisateur;
		console.log(`req.session.user: ${req.session.user}`);
		res.status(200).json({ utilisateur });
	},
};

module.exports = loginControlleur;
