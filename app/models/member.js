const client = require("./dbClient");

const memberModel = {

    async findByEmail(email) {
        try {
            const sqlQuery = `SELECT * FROM utilisateur WHERE email = $1`;
            const values = [email] ;
            const result = await client.query(sqlQuery, values);
            returnresult.row[0];

        }catch (error) {
            console.log(error);
        }
    },

    async findAll() {
       let members
       try {
        const result = await client.query("SELECT * FROM member ;");
        members = result.rows;

       } catch(error) {
        console.log(error);
       }
       return members;
       

        },

        async insert(member) {
            try {
                const sqlQuery ="INSERT INTO member( pseudo, email, passsword, role) VALUE($1,$2,$3,$4) returning *;";
                const values = [member.pseudo, member.email, member.password,member.role];
                const result = await client.query(sqlQuery, values);
                return result.rows[0];
            }catch(error) {
                console.log(error);
            }
        } ,
        async findById(id) {
            let member;
            try {
                const sqlQuery = "SELECT * FROM member WHERE id = $1;";
                const values = [id];
                const result = await client.query(sqlQuery, values);
                member = result.rows[0] ;
            }
            catch(error) {
                console.log(error);
            }
            return member;
        },
        async update ( member){
            let memberDb;
            //  variable utilisée pour stocker les informations mises à jour de l'utilisateur dans la bdd
            try{
                

                const values = [];     // tableau vide pour stocker les valeurs des paramètres de la requêtes SQL        
                            
                const parameters = [];          // Tableau Vide , qui sera utilisé pour stocker le nom des colonnes et leurs positions dans la requête SQL                    
        
                let counter = 1; // variable utilisée pour suivre le nombre de paramètres dans la requête SQL.
                
                
                for(const key in member){ 
                    // Une boucle qui itère sur les clés de l'objet "utilisateur" => pour chaque clé le code verifie que la clé n'est pas id, si c'est le cas, il ajoute la valeur correspondante de l'objet "utilisateur" au tableau values, et ajoute
                    // également une chaîne de caracteres au tableau "parameters" qui contient le nom de la colonne et la position de la requête SQl                
    
                if(key!="id"){                             
                                                    
                values.push (member[key]);                   
    
                parameters.push(`${key}=$${counter}`);      
                counter++;                                
                }
            }
                values.push (member.id);  //  On ajoute la valeur de la clé "id" de l'objet "utilisateur" au tableau "values"
               
               
                const sqlQuery = `UPDATE member SET ${parameters.join()} WHERE id=$${counter} RETURNING *;`;
                // Crée une chaîne de caractères qui contient la requête SQL complète. Cette requête met à jour une ligne dans la table "utilisateur" en utilisant les valeurs stockées
                //  dans le tableau "parameters" et recherche la ligne correspondante à l'ID stocké dans la dernière position du tableau "values". 
                //  La clause "RETURNING *" renvoie la ligne mise à jour.
    
                const result = await client.query(sqlQuery,values);
            memberDb = result.rows[0];
            }
            catch(error){
                console.log(error);
            }
    
            return memberDb;
        },
        async delete(id){
       
            try{
                const sqlQuery = `DELETE FROM public.member
                WHERE id=$1;`;
                const values = [id];
                const result = await client.query(sqlQuery,values);
               return result;
              
    
           }catch(err){
                console.log(err);
            }
            return memberDb;
        }
       

    };

    module.exports = memberModel;