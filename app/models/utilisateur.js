const client = require("./dbClient");

const utilisateurModel = {

    async findByEmail(email) {
        try {
            const sqlQuery = `SELECT * FROM utilisateur WHERE email = $1`;
            const values = [mail] ;
            const result = await client.query(sqlQuery, values);
            returnresult.row[0];

        }catch (error) {
            console.log(error);
        }
    },

    async findAll() {
       let members
       try {
        const result = await client.query("SELECT * FROM utilisateur ;");
        members = result.rows;

       } catch(error) {
        console.log(error);
       }
       return members;
       

        },

        async insert(utilisateur) {
            try {
                const sqlQuery ="INSERT INTO utilisateur( pseudo, email, passsword, role) VALUE($1,$2,$3,$4) returning *;";
                const values = [utilisateur.pseudo, utilisateur.email, utilisateur.password,utilisateur.role];
                const result = await client.query(sqlQuery, values);
                return result.rows[0];
            }catch(error) {
                console.log(error);
            }
        }

    }