// CONFIGURATION DE L'API******************************************

const express = require("express");
const router = require("./router");
const app = express();
const expressJSDocSwagger = require('express-jsdoc-swagger');
const options = {
    info: {
        version: '1.0.0',
        title: 'Plume 2.0',
        license: {
            name: 'MIT',
        },
    },
    security: {
        BasicAuth: {
            type: 'http',
            scheme: 'basic',
        },
    },
    baseDir: __dirname,
    // Glob pattern to find your jsdoc files (multiple patterns can be added in an array)
    filesPattern: './**/*.js',
};


app.use(express.json());

app.use("/api",router);


module.exports = app;