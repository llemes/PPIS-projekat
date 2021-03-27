const express = require("express");
const router = express.Router();
const md5 = require("md5");
const jwt = require("jsonwebtoken");
const jwtConfig = require("../config/jwt.json");
const Uloga = require("../models/uloga");

module.exports = {
  create(req, res) {
    return Uloga.create({ naziv: req.body.name })
      .then(uloga => res.status(201).send(uloga))
      .catch(error => res.status(400).send(error));
  }
};
