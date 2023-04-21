const client = require ("./dbClient");
const { cpSync } = require("fs");// copie un fichier de manière synchrone, en une seule ligne de code ex : cpSync('chemin/source/fichier.txt', 'chemin/destination/fichier.txt');

const workModel = {

    async findByTitle(titre) {
        try {
            const sqlQuery = `SELECT * FROM work WHERE title = $1;`;
            const values = [titre];
            const result = await client.query( sqlQuery,  values);
            return result.rows[0];
            
        } catch (error) {
            console.log(error);
            
        }
    },

    async findAll() {
        let work
        try {
            const result = await client.query("SELECT * FROM work;");
        work = result.rows;
            
        } catch (error) {
            
        }
        return work;
    },

    async insert (work) {
        try {
            const sqlQuery = `INSERT INTO work  (content, author, title,note, member_id ) VALUES ($1, $2, $3,$4,$5) RETURNIG *;`;
            const values = [work.content, work.author, work.title,work.note, work.member_id];

            const result = await client.query( sqlQuery,  values);
            console.log(result.rows[0]);
            return result.rows[0];
            
        } catch (error) {
            console.log(error);
            
        }
    
},

async findById(id) {
    let work;
    try {
        const sqlQuery = `SELECT * FROM work WHERE id = $1;`;
        const values = [id];
        const result = await client.query( sqlQuery,  values);
        work = result.rows[0];
        
    } catch (error) {
        console.log(error);
        
    }
    return work;
},

async delete(id) {

    try {
        const sqlQuery = `DELETE FROM work WHERE id = $1;`;
        const values = [id];
        const result = await client.query( sqlQuery,  values);
        return result;
        
    } catch (error) {
        console.log(error);
        
    }
}

};

module.exports =workModel;

