const jwt = require('jsonwebtoken');

const security = {
    checkAdmin(req, res, next) {
        if (!req.user) {
            return res.status(401).json('Vous devez vous connecter');
        }

        if (req.user.role !== 'admin') {
            return res.status(401).json('Vous n\'êtes pas administrateur');
        }

        next();
    },

    checkUser(req, res, next) {
        if (req.user && (req.user.role === 'visiteur' || req.user.role === 'admin')) {
            next();
        } else {
            res.status(401).json('Vous n\'êtes pas autorisé à accéder à cette ressource.');
        }
    }
};

module.exports = security;
