const { workModel } = require("../models");
const { labelModel} = require ("../models")
const path = require("path");




const workController = {
  async getAllWorks(req, res) {
    const works = await workModel.findAll();
    console.log(req.session);
    return res.status(200).json(works);
  },
  async getWorksByLabel(req, res) {
    try {
      const labelId = req.params.labelId;
      const works = await workModel.findByLabelId(labelId);
      if (!works || works.length === 0) {
        return res.status(404).json({ message: 'No works found for this label' });
      }
      return res.status(200).json(works);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Server error' });
    }
  },
  
  async addWork(req, res) {
    const {title, author, content, note, member_id, labelIds } = req.body;
    console.log("LABELSID",labelIds);


    const work = await workModel.findByTitle(title);
    if (work) {
        console.log('Work trouvé par le titre:', work);
      return res.status(409).json("Ce titre est déjà présent en BDD");
    }
    if (req.session.role === "admin" && req.session.user.id) {
      const newWorkData = {
        
        content: content,
        author: author,
        title: title,
        note: note || undefined,
        member_id: req.session.user.id,
      };
      try {
        const newWork = await workModel.insert(newWorkData)

        const labelConnections = await Promise.all(
          labelIds.map(labelId =>
            labelModel.createWorkLabel(newWork.id, parseInt(labelId,10))
             
          )
        );
      
        //Combined work with label's relations
      const responseObj = {
        ...newWork,
        labels: labelConnections,
      };

      res.status(200).json(responseObj);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Server error' });
    }
  } else {
    res
      .status(401)
      .json({ message: "Vous devez être admin pour ajouter une oeuvre" });
  }
},
     
   
  async getWork(req, res) {
    try {
      const work = await workModel.findById(req.params.id);
      if (!work) {
        return res.status(404).json({ message: 'Work not found' });
      } console.log(work);
      return res.status(200).json(work);
     

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
 
      const updatedWork = await workModel.update(workId, {
        ...work,
        labels: {
          set: labelIds.map(id => ({ id })) // The 'set' operator in Prisma is used to set a new relation by replacing the old one.
          // 'labelIds.map(id => ({ id }))' transforms an array of label IDs into an array of objects.
        }
      });
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
