const express = require("express");
const router = express.Router();
const md5 = require("md5");
const jwt = require("jsonwebtoken");
const jwtConfig = require("../config/jwt.json");
const { HistorijaDogadjaj } = require("../models");
//const HistorijaDogadjaj = require('../models').HistorijaDogadjaj;

router.post("/historijadogadjaj", (req, res, next) => {
  const { datumOd, datumDo, dogadjajId, statusDogadjajId} = req.body;
  HistorijaDogadjaj.create({ datumOd, datumDo, dogadjajId, statusDogadjajId })
    .then(result => {
      res.status(201).json({
        success: true
      });
    })
    .catch(err => {
      console.log(err);
    });
});

router.get("/historijadogadjaj", (req, res, next) => {
  HistorijaDogadjaj.findAll({ where: {}, attributes: ["id","datumOd", "datumDo", "dogadjajId", "statusDogadjajId"], raw: true })
    .then(result => {
      res.status(200).send(result);
    })
    .catch(err => {
      console.log(err);
    });
});

router.get("/historijadogadjaj/:id", (req, res, next) => {
  let id = req.params.id;
  HistorijaDogadjaj.findOne({
    where: { id },
    attributes: ["id","datumOd", "datumDo", "dogadjajId", "statusDogadjajId"],
    raw: true
  })
    .then(result => {
      res.status(200).send(result);
    })
    .catch(err => {
      console.log(err);
    });
});

router.put("/historijadogadjaj/:id", (req, res, next) => {
  let id = req.params.id;
  const { datumOd, datumDo, dogadjajId, statusDogadjajId } = req.body;
  HistorijaDogadjaj.update(
    {datumOd, datumDo, dogadjajId, statusDogadjajId},
    { where: { id }, attributes: ["datumOd", "datumDo", "dogadjajId", "statusDogadjajId"], raw: true }
  )
    .then(function(result) {
      res.status(200).send(result);
    })
    .catch(next);
});

router.delete("/historijadogadjaj/:id", (req, res, next) => {
  const id = req.params.id;
  HistorijaDogadjaj.destroy({ where: { id }, attributes: ["datumOd", "datumDo", "dogadjajId", "statusDogadjajId"], raw: true })
    .then(result => {
		colsole.log(result);
      res.status(200).send({'wohoo':result.toString()});
    })
    .catch(next);
});

module.exports = router;
