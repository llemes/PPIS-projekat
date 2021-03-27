const express = require("express");
const router = express.Router();
const md5 = require("md5");
const jwt = require("jsonwebtoken");
const jwtConfig = require("../config/jwt.json");
const { Dogadjaj } = require("../models");
//const Dogadjaj = require('../models').Dogadjaj;

router.post("/dogadjaj", (req, res, next) => {
  const { dogadjaj, prioritetId, tipId, inicijator } = req.body;
  Dogadjaj.create({ dogadjaj, prioritetId, tipId, inicijator })
    .then(result => {
      res.status(201).json({
        success: true,
		id: result.dataValues.id
      });
    })
    .catch(err => {
      console.log(err);
    });
});

router.get("/dogadjaj", (req, res, next) => {
  Dogadjaj.findAll({
    where: {},
    attributes: ["id","dogadjaj", "prioritetId", "tipId", "inicijator"],
    raw: true
  })
    .then(result => {
      res.status(200).send(result);
    })
    .catch(err => {
      console.log(err);
    });
});

router.get("/dogadjaj/:id", (req, res, next) => {
  let id = req.params.id;
  Dogadjaj.findOne({
    where: { id },
    attributes: ["id","dogadjaj", "prioritetId", "tipId", "inicijator"],
    raw: true
  })
    .then(result => {
      res.status(200).send(result);
    })
    .catch(err => {
      console.log(err);
    });
});

router.put("/dogadjaj/:id", (req, res, next) => {
  let id = req.params.id;
  const { dogadjaj, prioritetId, tipId, inicijator } = req.body;
  Dogadjaj.update(
    {dogadjaj, prioritetId, tipId, inicijator },
    {
      where: { id },
      attributes: ["dogadjaj", "prioritetId", "tipId", "inicijator"],
      raw: true
    }
  )
    .then(function(result) {
      res.status(200).send(result);
    })
    .catch(next);
});

router.delete("/dogadjaj/:id", (req, res, next) => {
  const id = req.params.id;
  Dogadjaj.destroy({
    where: { id },
    attributes: ["dogadjaj", "prioritetId", "tipId", "inicijator"],
    raw: true
  })
    .then(result => {
      res.status(200).send({'wohoo':result.toString()});
    })
    .catch(next);
});

module.exports = router;
