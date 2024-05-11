const jwt = require('jsonwebtoken');

const authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(' ')[1];
        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if (err) {
            
                if (err.name === "TokenExpiredError") {
                    return res.status(401).json({ error: "Session expirée, veuillez vous reconnecter." });
                }
                return res.status(403).json({ error: "Accès refusé, token invalide." });
            }
            req.user = user;
            next();
        });
    } else {
        res.status(401).json({ error: "Token requis pour l'accès." });
    }
};


module.exports = authenticateJWT;
