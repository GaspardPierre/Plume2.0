const { commentModel } = require("../models");

const commentController = {
    async findAllWorkComments (req, res) {
        try { 
       const { id } = req.params;
       console.log("poemId:", id);
         const comments = await commentModel.findAllByPoemId(id);
            return res.status(200).json(comments);
        } catch (error) {
            console.log(error);
            return res.status(500).json({ error });
        }
    
    },
    async addComment(req, res) {
        console.log("req.session:", req.session);
        console.log("req.body:", req.body);
        const { comment : content, poemId } = req.body;

        // Verify if user is connected
        if(req.session.role && req.session.user.id){
        const comment = {
          content: content,
          member_id: req.session.user.id,
          work_id: poemId,
        };
        const newComment = await commentModel.insert(comment);
        res.status(200).json(newComment);
      } else {
        res.status(401).json({ message: "Vous devez être connecté pour poster un commentaire" });
        }
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
        await commentModel.delete(parseInt(req.params.id));
        res.status(200).json({message: "Comment deleted"});
    }   
};
module.exports = commentController;

