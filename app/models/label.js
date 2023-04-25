const client = require("./dbClient");
const { cpSync } = require("fs");// copie un fichier de manière synchrone, en une seule ligne de code ex : cpSync('chemin/source/fichier.txt', 'chemin/destination/fichier.txt');
const labelModel = {
    async findAll() {
        let labels
        try {
            const result = await client.query("SELECT * FROM label;");
            labels = result.rows;
        } catch (error) {
            console.log(error);
        }
        return labels;
    },
    async insert(label) {
        try {
            const sqlQuery = `INSERT INTO label (tag) VALUES ($1) RETURNING *;`;
            const values = [label.tag];
            const result = await client.query(sqlQuery, values);
            return result.rows[0];
        } catch (error) {
            console.log(error);
        }
    },
    async findById(id) {
        let label;
        try {
            const sqlQuery = `SELECT * FROM label WHERE id = $1;`;
            const values = [id];
            const result = await client.query(sqlQuery, values);
            label = result.rows[0];
        } catch (error) {
            console.log(error);
        }
        return label;
    },
    async findByTag(tag) {
        try {
            const sqlQuery = `SELECT * FROM label WHERE tag = $1;`;
            const values = [tag];
            const result = await client.query(sqlQuery, values);
            return result.rows[0];
        } catch (error) {
            console.log(error);
        }
    },
    async update(label) {
    let labelModelb;
    try {
        const values = [label.tag, label.id];
        const sqlQuery = `UPDATE label SET tag = $1 WHERE id = $2 RETURNING *;`;
        const result = await client.query(sqlQuery, values);
        labelModelb = result.rows[0];
    } catch (error) {
        console.log(error);


    }
},
    async delete(id) {
        try {
            const sqlQuery = `DELETE FROM label WHERE id = $1;`;
            const values = [id];
            await client.query(sqlQuery, values);
        }
        catch (error) {
            console.log(error);
        }
    }
};
module.exports = labelModel;
