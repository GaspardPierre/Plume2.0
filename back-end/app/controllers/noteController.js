const { noteModel } = require("../models");

const noteController = {
    async findAllNotes (req, res) {
        const notes = await noteModel.findAll();
        res.status(200).json(notes);    
    },
    async addNote (req, res) {
        const { average, member_id, work_id } = req.body;
        const note = {
            average: average,
            member_id: member_id,
            work_id: work_id,
        };
        const newNote = await noteModel.insert(note);
        res.status(200).json(newNote);
    },
    async getNote (req, res) {
            const id = parseInt(req.params.id);
            const note = await noteModel.findById(id);
           return  res.status(200).json(note);
    } ,
    async modifyNote (req, res) {
        const note = req.body;
        note.id = req.params.id;
        const update = await noteModel.findById(req.params.id);
        if (update) {
            const updatedNote = await noteModel.update(note);
            res.status(200).json(updatedNote);
        } else {
            res.status(404).json({error: "Note not found"});
        }
    },
    async deleteNote (req, res) {
        await noteModel.delete(req.params.id);
        res.status(200).json({message: "Note deleted"});

    }
};

module.exports = noteController;

