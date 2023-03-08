const client = require ("./dbClient");
const { cpSync } = require("fs");// copie un fichier de manière synchrone, en une seule ligne de code ex : cpSync('chemin/source/fichier.txt', 'chemin/destination/fichier.txt');

const oeuvreModel = {

    async findByTitle(titre) {
        try {
            const sqlQuery = `SELECT * FROM oeuvre WHERE title = $1;`;
            const values = [titre];
            const result = await client.query( sqlQuery,  values);
            return result.rows[0];
            
        } catch (error) {
            console.log(error);
            
        }
    },

    async findAll() {
        let oeuvre
        try {
            const result = await client.query("SELECT * FROM oeuvre;");
            oeuvre = result.rows;
            
        } catch (error) {
            
        }
        return oeuvre;
    },

    async insert (oeuvre) {
        try {
            const sqlQuery = `INSERT INTO oeuvre (content, auteur, titre, utilisateur_id ) VALUES ($1, $2, $3,$4) RETURNIG *;`;
            const values = [oeuvre.content, oeuvre.auteur, oeuvre.titre, oeuvre.utilisateur_id];

            const result = await client.query( sqlQuery,  values);
            console.log(result);
            console.log(result.rows[0]);
            return result.rows[0];
            
        } catch (error) {
            console.log(error);
            
        }
    
},

async findById(id) {
    let oeuvre;
    try {
        const sqlQuery = `SELECT * FROM oeuvre WHERE id = $1;`;
        const values = [id];
        const result = await client.query( sqlQuery,  values);
        oeuvre = result.rows[0];
        
    } catch (error) {
        console.log(error);
        
    }
    return oeuvre;
},

async delete(id) {

    try {
        const sqlQuery = `DELETE FROM oeuvre WHERE id = $1;`;
        const values = [id];
        const result = await client.query( sqlQuery,  values);
        return result;
        
    } catch (error) {
        console.log(error);
        
    }
}

};

module.exports = oeuvreModel;

