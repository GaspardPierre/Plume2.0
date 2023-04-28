const { commentModel } = require("../models");

const commentController = {
    async findAllComments (req, res) {
        const comments = await commentModel.findAll();
        res.status(200).json(comments); 
    },
    async addComment (req, res) {
        const { content, member_id, work_id } = req.body;
        const comment = {
        content: content,
        member_id: member_id,
        work_id: work_id,
        };
        const newComment = await commentModel.insert(comment);
        res.status(200).json(newComment);
    },
    async getComment (req, res) {
        const id = parseInt(req.params.id);
        const comment = await commentModel.findById(id);
        return res.status(200).json(comment);
    },
    async modifyComment (req, res) {
        const comment = req.body;
        comment.id = req.params.id;
        const update = await commentModel.findById(req.params.id);
        if (update) {
            const updatedComment = await commentModel.update(comment);
            res.status(200).json(updatedComment);
        } else {
            res.status(404).json({error: "Comment not found"});
        }
    },
    async deleteComment (req, res) {
        await commentModel.delete(req.params.id);
        res.status(200).json({message: "Comment deleted"});
    }   
};
module.exports = commentController;

