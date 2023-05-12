// ATTRIBUTION DROITS ADMIN ET UTILISATEUR**********************************


const security = {
    checkAdmin(req, res, next) {
        console.log('REQ.SESSION.USER.ROLE ',req.session.role);
    //   Si l'utilisateur n'et pas connecté => 401
        if (!req.session.user) {
          return res.status(401).json('vous devez vous connecter');
        }
    //   Si l'utilisateur n'est pas admin =>401
        if (req.session.role !== 'admin') {
          return res.status(401).json('vous n\'etes pas administrateur');
        }
    //   Si Admin, on passe au midlleware suivant
        next();
      },
      
      checkUser(req, res, next) {
        console.log(req.session);
        if (req.session.user && req.session.user.role === 'visiteur') {
          next();
        } else {
          res.status(401).json('Vous n\'êtes pas autorisé à accéder à cette ressource.');
        }
      }
      
}   
module.exports = security;  