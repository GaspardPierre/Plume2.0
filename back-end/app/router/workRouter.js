const express = require('express');
const {workController} = require('../controllers/index.js');
const router = express.Router();
const security = require('../service/security.js');
const upload = require ('../../uploader/uploader.js')
const multer = require('multer')



//Toutes les url commencent par oeuvres //


/**
 * Modèle de données pour une oeuvre
 * @typedef {object} oeuvre
 * @property {string} route - Url de l'oeuvre
 * @property {string} title - Titre de l'oeuvre
 * @property {string} content - Contenu de l'oeuvre
 */

/**
 * GET /api/oeuvre
 * @summary Retourne l'ensemble des oeuvres.
 *
 * Cette route retourne toutes les oeuvres disponibles dans la base de données.
 *
 * @return {array<oeuvre>} 200 - Liste des oeuvres.
 * @return {Error} 500 - Erreur inattendue.
 */

/**
 * POST /api/oeuvre/addWork
 * @summary Ajoute une oeuvre.
 *
 * Cette route ajoute une oeuvre à la base de données. Les champs obligatoires pour ajouter une oeuvre sont `title` et `content`.
 *
 * @param {oeuvre} request.body - Objet JSON contenant les informations de l'oeuvre à ajouter.
 * @return {object} 200 - Objet JSON contenant l'oeuvre créée.
 * @return {Error} 500 - Erreur inattendue.
 */

/**
 * GET /api/oeuvre/:id
 * @summary Retourne une oeuvre en fonction de son identifiant.
 *
 * Cette route retourne une oeuvre spécifique à partir de son identifiant.
 *
 * @param {string} id - Identifiant de l'oeuvre.
 * @return {oeuvre} 200 - Objet JSON contenant les informations de l'oeuvre demandée.
 * @return {Error} 500 - Erreur inattendue.
 */

/**
 * PATCH /api/oeuvre/:id
 * @summary Modifie une oeuvre en fonction de son identifiant.
 *
 * Cette route permet de modifier une oeuvre spécifique à partir de son identifiant. Les champs à modifier doivent être spécifiés dans l'objet JSON fourni dans la requête.
 *
 * @param {string} id - Identifiant de l'oeuvre à modifier.
 * @param {oeuvre} request.body - Objet JSON contenant les champs à modifier.
 * @return {oeuvre} 200 - Objet JSON contenant les informations de l'oeuvre modifiée.
 * @return {Error} 500 - Erreur inattendue.
 */

/**
 * DELETE /api/oeuvre/:id
 * @summary Supprime une oeuvre en fonction de son identifiant.
 *
 * Cette route permet de supprimer une oeuvre spécifique à partir de son identifiant.
 *
 * @param {string} id - Identifiant de l'oeuvre à supprimer.
 * @return {string} 200 - Message de confirmation de la suppression.
 * @return {Error} 500 - Erreur inattendue.
 */



router.get('/', workController.getAllWorks);

router.get('/:id', workController.getWork);
router.get('/byLabel/:labelId', workController.getWorksByLabel);

router.patch('/:id', security.checkAdmin, workController.modifyWork);

router.post('/addWork', (req, res, next) => {
    console.log("Requête reçue :", req.method, req.url);
    console.log("Headers :", req.headers);
    console.log("Body :", req.body);
    next();
}, security.checkAdmin, upload.single('picture'), workController.addWork);



router.delete('/:id', security.checkAdmin, workController.deleteWork);

module.exports = router;
