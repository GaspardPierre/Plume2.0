const { labelModel } = require("../models");


const labelController = {
    async getAllLabels(req,res){
        const labels = await labelModel.findAll();
        res.json(labels);
    },
    async addLabel(req,res){
       
       
            const { content, media_id } = req.body;
            console.log(req.body);
            const label = await labelModel.findByContent(content);
        console.log("Is findByContent problem ? ");
            if(label) {
                return res.status(401).json("Ce label est déjà présente en bdd");
            // Code to add card to database using the destructured variables
          
            //return res.status(500).json;
            }
        const newLabel = {
            content : content,
            media_id : media_id
            }
    //Finalement on l'envoi en base de données
    const labelDb = await labelModel.insert(newLabel);
    res.status(200).json(labelDb);
         
    
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
    async deleteLabel(req,res){

        const result = await labelModel.delete(req.params.id);

        res.json(result);
    }
};

module.exports = labelController;