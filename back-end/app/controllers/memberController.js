const { memberModel } = require("../models");
const bcrypt = require("bcrypt");

const memberController = {

    async getAllMembers(req,res) {
      try {
        const members = await memberModel.findAll();
        res.json(members);
      } catch (error) {
        console.error(error);
        res.status(500).send('Erreur lors de la récupération des membres');
      }
    },
    async verifyRole(req, res) {

      console.log("requête reçue!!!!");
   
      if (!req.session.user || !req.session.role) {
          console.log(`Session invalid: ${req.session.id}`);
          return res.status(401).json({
              error: "authentication_required",
              message: "Authentication required or session expired",
              detail: {
                  userExists: !!req.session.user,
                  roleExists: !!req.session.role
              }
          });
      }
  
 
      const response = res.status(200).json({
          member: {
              id: req.session.user.id,
              role: req.session.role,
              pseudo: req.session.user.pseudo
          },
          sessionExpiresAt: req.session.cookie._expires  
      });
      console.log("Session invalid: ", req.session.id, " User: ", !!req.session.user, " Role: ", !!req.session.role);

      return response;
  }
,  
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
      const member = await memberModel.findById(req.params.id);
        
        if(!member) {
            res.status(404).json({ message: `Utilisateur introuvable pour l'id : ${req.params.id}` });
        }
        res.status(200).json(member);
    },

    async  modifyMember(req, res) {
        const memberId = req.params.id;
   
        const memberUpdates = req.body;
        console.log("memberUpdates", memberUpdates)
      
        let member = await  memberModel.findById( memberId);
      
        // Vérifie si l'utilisateur existe
        if (!member) {
          return res.status(404).json({ message: "L'utilisateur n'existe pas" });
        }
      
        // Met à jour les propriétés de l'utilisateur avec les valeurs fournies dans le corps de la requête
        for (const key in memberUpdates) {
          member[key] = memberUpdates[key];
        }
      
        const updatedmember = await memberModel.update(member);
      
        res.json(updatedmember);
      },

      async deleteMember(req, res) {
        const memberId = req.params.id;
        const deletedMember = await memberModel.delete(memberId);
      
        if (!deletedMember)  {
          return res.status(404).json({ message: "Membre introuvable" });
        }
      
        res.json({ message: "Membre supprimé avec succès" });
      }
      
}
module.exports = memberController;