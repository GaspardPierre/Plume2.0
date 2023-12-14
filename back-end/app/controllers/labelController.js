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
    async modifyLabel(req,res){
        const label = req.body; // les modifications apportées à login
        label.id = req.params.id;
        const update = await labelModel.findById(req.params.id);
        for(const key in req.body){
            update[key]= req.body[key]
            console.log(update);
        }

        const labelDb = await labelModel.update(label);

        res.json(labelDb);
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