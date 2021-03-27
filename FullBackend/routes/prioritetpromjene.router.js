const express = require("express");
const router = express.Router();
const md5 = require("md5");
const jwt = require("jsonwebtoken");
const jwtConfig = require("../config/jwt.json");
const { PrioritetPromjene } = require("../models");
//const PrioritetPromjene = require('../models').PrioritetPromjene;

router.post("/prioritetpromjene", (req, res, next) => {
  const { prioritetPromjene } = req.body;
  PrioritetPromjene.create({ prioritetPromjene })
    .then(result => {
      res.status(201).json({
        success: true
      });
    })
    .catch(err => {
      console.log(err);
    });
});

router.get("/prioritetpromjene", (req, res, next) => {
  PrioritetPromjene.findAll({
    where: {},
    attributes: ["id","prioritetPromjene"],
    raw: true
  })
    .then(result => {
      res.status(200).send(result);
    })
    .catch(err => {
      console.log(err);
    });
});

router.get("/prioritetpromjene/:id", (req, res, next) => {
  let id = req.params.id;
  PrioritetPromjene.findOne({
    where: { id },
    attributes: ["id","prioritetPromjene"],
    raw: true
  })
    .then(result => {
      res.status(200).send(result);
    })
    .catch(err => {
      console.log(err);
    });
});

router.put("/prioritetpromjene/:id", (req, res, next) => {
  let id = req.params.id;
  const { prioritetPromjene } = req.body;
  PrioritetPromjene.update(
    { prioritetPromjene },
    { where: { id }, attributes: ["prioritetPromjene"], raw: true }
  )
    .then(function(result) {
      res.status(200).send(result);
    })
    .catch(next);
});

router.delete("/prioritetpromjene/:id", (req, res, next) => {
  const id = req.params.id;
  PrioritetPromjene.destroy({ where: { id }, attributes: ["prioritetPromjene"], raw: true })
    .then(result => {
      res.status(200).send({'wohoo':result.toString()});
    })
    .catch(next);
});

module.exports = router;
