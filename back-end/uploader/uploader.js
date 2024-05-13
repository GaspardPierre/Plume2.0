const { S3Client } = require('@aws-sdk/client-s3');
const express = require('express');
const multer = require('multer');
const multerS3 = require('multer-s3');
const path = require('path');
const app = express();

// Configurez le client S3 avec la version 3 de l'AWS SDK
const s3 = new S3Client({
    region: process.env.AWS_REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_ACCESS_SECRET
    }
});
console.log("Configuration du client S3 : ", s3.config);

// Configuration de Multer pour utiliser le stockage S3
const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: process.env.AWS_BUCKET_NAME,
        metadata: function (req, file, cb) {
            console.log("Metadata du fichier : ", file); // Log des informations >
            cb(null, { fieldName: file.fieldname });
        },
        key: function (req, file, cb) {
    const filename = Date.now().toString() + path.extname(file.originalname);
    console.log("Clé (filename) générée : ", filename); // Log du nom du fichier généré
    cb(null, filename);
}

    })
});



module.exports = upload;
