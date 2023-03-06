const { Pool } = require ('pg');

/*Le pool perme de gérer plusieurs clients en même temps*/
const pool = new Pool(); 

module.exports = {

    // Mise en place d'un système de tracking de mes requêtes

    originalPool : pool,

    async query(...params) {
                // j'ajoute l'appel à debug pour afficher le détail de ma requête

        debug(...params)
        
        return this.originalPool.query(...params);
    }
}


// l'export standard (sans le tracking) :
module.exports = pool;
