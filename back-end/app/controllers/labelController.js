const { labelModel } = require("../models");


const labelController = {
    async getAllLabels(req,res){
        const labels = await labelModel.findAll();
        res.json(labels);
    },
    async addLabel(req,res){
      try {
       
            const { tag} = req.body;
            console.log(req.body);
          
    const existingLabel = await labelModel.findByTag(tag);
    if (existingLabel) {
      return res.status(401).json("Ce label est déjà présent en bdd");
    }
        const newLabel = {    
           tag: tag,
            }
    //Finalement on l'envoi en base de données
    const labelDb = await labelModel.insert(newLabel);
    res.status(200).json(labelDb);
  } catch (error) {
    console.log("Erreur lors de l'ajout du label:", error);
    res.status(500).json({ error: "Erreur interne du serveur" });
  }
         
    
    },
    async getLabel(req,res){

        const label = await labelModel.findById(req.params.id);

        return res.status(200).json(label);
    },
    async modifyLabel(req, res){
      try {
          const labelData = req.body; 
          const labelId = req.params.id;
          const update = await labelModel.findById(labelId);
  
          // Vérification que le label existe
          if (!update) {
              return res.status(404).json({ error: "Label non trouvé" });
          }
  
          // Mise à jour du label
          for(const key in labelData){
              update[key] = labelData[key];
              console.log(`Mise à jour ${key}:`, update[key]);
          }
  
          // Log avant la mise à jour
          console.log('Label avant la mise à jour en BDD:', update);
  
          // Envoi de la mise à jour à la base de données
          const labelDb = await labelModel.update(update);
          
          // Vérifier si labelDb n'est pas undefined
          if (!labelDb) {
              console.error('Aucune réponse de la fonction update du modèle label');
              return res.status(500).json({ error: 'Erreur lors de la mise à jour du label' });
          }
  
          // Log après la mise à jour
          console.log('Label mis à jour avec succès:', labelDb);
  
          // Envoi de la réponse
          res.json(labelDb);
      } catch (error) {
          console.error("Erreur lors de la mise à jour du label:", error);
          res.status(500).json({ error: "Erreur interne du serveur" });
      }
  },
  
    async addLabelToWork(req, res) {
        const workId = req.params.workId;
        const labelId = req.body.labelId;
      
        try {
          const work = await prisma.work.update({
            where: { id: workId },
            data: {
              labels: {
                connect: { id: labelId }
              }
            }
          });
          res.status(200).json(work);
        } catch (error) {
          console.log(error);
          res.status(500).json("Erreur lors de l'ajout du label au work");
        }
      },
      
async deleteLabel(req, res) {
  try {
    const labelId = req.params.id; // Obtenir l'ID du label à partir des paramètres de la requête
    const result = await labelModel.delete(labelId); // Supprimer le label en utilisant l'ID

    if (result) { 
      res.status(200).json({
        message: "Label supprimé avec succès",
        result: result
      });
    } else { // Si aucun label n'a été supprimé (par exemple, si l'ID n'existe pas)
      res.status(404).json({
        message: "Label non trouvé ou déjà supprimé"
      });
    }
  } catch (error) { // En cas d'erreur dans le processus de suppression
    console.error(error); // Log de l'erreur
    res.status(500).json({ // Retour d'une réponse d'erreur
      message: "Erreur lors de la suppression du label",
      error: error
    });
  }
}
};

module.exports = labelController;