const { workModel } = require("../models");
const { labelModel} = require ("../models")

const multer = require('multer');
const upload =  require('../../uploader/uploader')





const workController = {


  async getAllWorks(req, res) {
    const works = await workModel.findAll();
  
    return res.status(200).json(works);
  },
  async getWorkByTitle(req, res) {
    try {
      const { title } = req.query;
  
      let works;
      if (title) {
        works = await workModel.findByTitle(title);
        if (!works || works.length === 0) return res.status(404).json({ message: "Work not found" });
      } else {
      
        works = await workModel.findAll();
      }
  
      return res.status(200).json({ data: works, total: works.length });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Server error' });
    }
  }
  ,
  
  async getWorksByLabel(req, res) {
    try {
      const labelId = req.params.labelId;
      const works = await workModel.findByLabelId(labelId);
      if (!works || works.length === 0) {
        return res.status(200).json({ message: 'No works found for this label' });
      }
      return res.status(200).json(works);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Server error' });
    }
  },
  

  async addWork(req, res) {
    console.log("req.file :", req.file);
    console.log("req.body :", req.body);

    try {
        const { title, author, content, note, member_id, labelIds } = req.body;

      
        if (!(req.session.role === "admin" && req.session.user.id)) {
            return res.status(401).json({ message: "Vous devez être admin pour ajouter une œuvre" });
        }

        // Verification
        const existingWork = await workModel.findTitle(title);
        if (existingWork) {
            return res.status(409).json({ message: "Ce titre est déjà présent en BDD" });
        }

        // Construire l'URL de l'image
        const imageUrl = req.file ? `$http://${req.get('host')}/uploads/${req.file.filename}` : null;
        console.log("imageURL*************", imageUrl);

        // Préparer les données pour le nouveau travail
        const newWorkData = {
            title,
            author,
            content,
            note,
            member_id: req.session.user.id,
            urlImage: imageUrl
        };

        // add Work
        const newWork = await workModel.insert(newWorkData);

        // Handling labels
        let labelConnections = [];
        if (Array.isArray(labelIds) && labelIds.length) {
            labelConnections = await Promise.all(
                labelIds.map(labelId => labelModel.createWorkLabel(newWork.id, parseInt(labelId, 10)))
            );
        }

        // Construire et envoyer la réponse
        const responseObj = {
            ...newWork,
            labels: labelConnections,
        };
        res.status(200).json(responseObj);
    } catch (error) {
        console.error("Erreur dans addWork :", error);
        res.status(500).json({ message: 'Erreur serveur', error: error.message });
    }
},

   
  async getWork(req, res) {
    try {
      if (!req.params.id) {console.log("pas d'id!!!")} else {

      
      const work = await workModel.findById(parseInt(req.params.id));
      if (!work) {
        return res.status(404).json({ message: 'Work not found' });
      } console.log(work);
      return res.status(200).json(work);}
     

    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Server error' });
    }
  
  },
  
  async modifyWork(req, res) {

    const work = req.body;
    const workId = req.params.id;
    const { labelIds } = req.body; 
    console.log(req.body, labelIds,"Les works et les labels****")
    if (isNaN(workId)) {
      return res.status(400).json({ message: 'Invalid ID' });
    }
  
    try {
      const updateData = {
        ...work
      };
      if (Array.isArray(labelIds)) {
        updateData.labels = {
          set: labelIds.map(id => ({ id }))
        // The 'set' operator in Prisma is used to set a new relation by replacing the old one.
        // 'labelIds.map(id => ({ id }))' transforms an array of label IDs into an array of objects.
      
    };
      };
 
      const updatedWork = await workModel.update(workId, updateData);

     
      res.json(updatedWork);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Server error' });
    }
  },
  


  async deleteWork(req, res) {
 const workId = req.params.id;
 console.log("word id :", workId);
 const deleteWork = await workModel.delete(workId);
 if(!deleteWork) {
      return res.status(404).json('Cette oeuvre n\'existe pas')
    }
   return res.json({ message: "L'oeuvre a bien été supprimée" });
  },
};





module.exports = workController;
