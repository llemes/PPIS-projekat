const express = require("express");
const router = express.Router();
const md5 = require("md5");
const jwt = require("jsonwebtoken");
const jwtConfig = require("../config/jwt.json");
const { TipDogadjaja } = require("../models");
//const TipDogadjaja = require('../models').TipDogadjaja;

router.post("/tipdogadjaja", (req, res, next) => {
  const { tipDogadjaja } = req.body;
  TipDogadjaja.create({ tipDogadjaja })
    .then(result => {
      res.status(201).json({
        success: true
      });
    })
    .catch(err => {
      console.log(err);
    });
});

router.get("/tipdogadjaja", (req, res, next) => {
  TipDogadjaja.findAll({ where: {}, attributes: ["id","tipDogadjaja"], raw: true })
    .then(result => {
      res.status(200).send(result);
    })
    .catch(err => {
      console.log(err);
    });
});

router.get("/tipdogadjaja/:id", (req, res, next) => {
  let id = req.params.id;
  TipDogadjaja.findOne({
    where: { id },
    attributes: ["id","tipDogadjaja"],
    raw: true
  })
    .then(result => {
      res.status(200).send(result);
    })
    .catch(err => {
      console.log(err);
    });
});

router.put("/tipdogadjaja/:id", (req, res, next) => {
  let id = req.params.id;
  const { tipDogadjaja } = req.body;
  TipDogadjaja.update(
    { tipDogadjaja },
    { where: { id }, attributes: ["tipDogadjaja"], raw: true }
  )
    .then(function(result) {
      res.status(200).send(result);
    })
    .catch(next);
});

router.delete("/tipdogadjaja/:id", (req, res, next) => {
  const id = req.params.id;
  TipDogadjaja.destroy({ where: { id }, attributes: ["tipDogadjaja"], raw: true })
    .then(result => {
      res.status(200).send({'wohoo':result.toString()});
    })
    .catch(next);
});

module.exports = router;
