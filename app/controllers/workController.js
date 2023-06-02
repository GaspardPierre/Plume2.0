const { workModel } = require("../models");
const path = require("path");

const workController = {
  async getAllWorks(req, res) {
    const works = await workModel.findAll();
    console.log(req.session);
    return res.status(200).json(works);
  },
  async addWork(req, res) {
    const {title, author, content, note, member_id } = req.body;
    console.log(req.body);
    const work = await workModel.findByTitle(title);
    if (work) {
        console.log('Work trouvé par le titre:', work);
      return res.status(409).json("Ce titre est déjà présent en BDD");
    }
    if (req.session.role === "admin" && req.session.user.id) {
      const newWork = {
        content: content,
        author: author,
        title: title,
        note: note || undefined,
        member_id: req.session.user.id
      };
      const workDb = await workModel.insert(newWork);
      res.status(200).json(newWork);
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
      }
      return res.status(200).json(work);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Server error' });
    }
  },
  

  async modifyWork(req, res) {
    const work = req.body;
    const workId = req.params.id;
    const update = await workModel.findById(workId);
    for (const key in work) {
      update[key] = work[key];
      console.log(update);
    }
    const workDb = await workModel.update(update);
    res.json(workDb);
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
