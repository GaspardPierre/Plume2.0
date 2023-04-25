const { workModel }  = require ("../models");
const path = require ('path');

const workController = {
    async getAllWorks(req,res) {
        const works = await workModel.findAll();
        console.log(req.session);
        return res.status(200).json(works)
    },
    async addWork(req,res) {
        const { content, author, title, note, member_id } = req.body;
        console.log(req.body)
        const work = await workModel.findByTitle(title);
        if(work) {
            return res.status(409).json("Ce titre est déjà présent en BDD")
    };
    const newWork = {
        content : content,
        author : author,
        title : title,
        note : note,
        member_id : member_id
    };
    const workDb = await workModel.insert(newWork);
    res.status(200).json(newWork)
    },
 async getWork(req,res) {
    const work = await workModel.findById(req.params.id);
    return res.status(200).json(work);
 },
    async modifyWork(req,res) {
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

        async deleteWork(req,res) {
            const result = await workModel.delete(req.params.id);
            res.json(result);
        }
    };
  module.exports = workController;

