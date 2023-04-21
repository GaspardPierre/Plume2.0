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
            return res.status(409).json("Ce titre est déjà présent en BDD").
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

}
