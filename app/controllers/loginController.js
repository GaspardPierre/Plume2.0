const { memberModel } = require("../models");
const bcrypt = require("bcrypt");
require("dotenv").config();

const loginControlleur = {

	async checkMember(req, res) {

		console.log(req.body);
		const { email, password } = req.body;
		const member = await memberModel.findByEmail(email);

		if (!member) {
			console.log(res.json);
			return res.status(404).json({ message: "Utilisateur non trouvé" });
		}
		// fonction qui permet de comparer le mot de passe et le mot de passe stocqué dans la BDD pour l'itilisateur trouvé.

		const isPasswordValid = await bcrypt.compare(
			password,
			member.password
		);

		if (!isPasswordValid) {
			return res.status(401).json({ message: "Mot de passe incorrect" });
		}
		// On  retire le mdp de l'objet utilisateur pas de la BDD.
		delete member.password;
if(member.id){
		req.session.user ={ id : member.id};
		req.session.role = member.role
		console.log(`Après connexion, req.session: ${JSON.stringify(req.session)}`);
}
		res.status(200).json({ member });
	},
};



module.exports = loginControlleur;
