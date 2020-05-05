const express = require("express");
const UploadService = require('./upload-service')

const UploadRouter = express.Router();
const jsonBodyParser = express.json();

UploadRouter
.route("/")
.post((req, res, next) => {

});

module.exports = UploadRouter