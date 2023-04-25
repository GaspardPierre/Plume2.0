const { loginModel } = require(".");
const client = require("./dbClient");


const loginModel = {    
  async findByPseudo(pseudo) {
    try {
      const sqlQuery = `SELECT * FROM members WHERE pseudo = $1;`;
      const values = [pseudo];
      const result = await client.query(sqlQuery, values);
      return result.rows[0];
    } catch (error) {
      console.log(error);
    }
  }
};
  module.exports = loginModel;