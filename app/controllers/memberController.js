const { memberModel } = require("../models");
const bcrypt = require("bcrypt");

const memberController = {

    async getAllMembers(req,res) {

        const members = await memberModel.findAll();
        res.json(members);
    },
    async addMember(req,res) {
        const { pseudo, email, password } = req.body;
        console.log(req.body);
        const member = await memberModel.findByEmail(email);
        if (member) {
            return res.status(401).json({ message: "Utilisateur existe déjà" });
        }

        // On génère un salt pour le mot de passe pour sécuriser le hachage , avant de le stocker en BDD
        const salt = await bcrypt.genSalt(10);

        const newMember= {
            pseudo : pseudo,
            email : email,
            password : await bcrypt.hash(password, salt),
            role : "visiteur"
        };

    const memberDb = await memberModel.insert(newMember);

    res.status(200).json(memberDb);
    },

    async getMember(req,res) {
        await memberModel.findById(req.params.id);
        if(!member) {
            res.status(404).json({ message: `Utilisateur introuvable pour l'id : ${req.params.id}` });
        }
        res.status(200).json(member);
    },

    async  modifyMember(req, res) {
        const memberId = req.params.id;
        const memberUpdates = req.body;
      
        const member = await  memberModel.findById( memberId);
      
        // Vérifie si l'utilisateur existe
        if (!member) {
          return res.status(404).json({ message: "L'utilisateur n'existe pas" });
        }
      
        // Met à jour les propriétés de l'utilisateur avec les valeurs fournies dans le corps de la requête
        for (const key in memberUpdates) {
          member[key] = memberUpdates[key];
        }
      
        const updatedmember = await member.save();
      
        res.json(updatedmember);
      },

      async deleteMember(req, res) {
        const memberId = req.params.id;
        const deletedMember = await memberModel.delate(memberId);
      
        if (!deletedMember)  {
          return res.status(404).json({ message: "Membre introuvable" });
        }
      
        res.json({ message: "Membre supprimé avec succès" });
      }
      
}
module.exports = memberController;