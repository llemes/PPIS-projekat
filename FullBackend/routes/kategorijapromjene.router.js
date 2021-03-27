const express = require("express");
const router = express.Router();
const md5 = require("md5");
const jwt = require("jsonwebtoken");
const jwtConfig = require("../config/jwt.json");
const { KategorijaPromjene } = require("../models");
//const KategorijaPromjene = require('../models').KategorijaPromjene;

router.post("/kategorijapromjene", (req, res, next) => {
  const { nazivKategorije } = req.body;
  KategorijaPromjene.create({ nazivKategorije })
    .then(result => {
      console.log(result.dataValues.id);
      res.status(201).json({
        success: true,
		id: result.dataValues.id
      });
    })
    .catch(err => {
      console.log(err);
    });
});

router.get("/kategorijapromjene", (req, res, next) => {
  KategorijaPromjene.findAll({
    where: {},
    attributes: ["id","nazivKategorije"],
    raw: true
  })
    .then(result => {
      res.status(200).send(result);
    })
    .catch(err => {
      console.log(err);
    });
});

router.get("/kategorijapromjene/:id", (req, res, next) => {
  let id = req.params.id;
  KategorijaPromjene.findOne({
    where: { id },
    attributes: ["id","nazivKategorije"],
    raw: true
  })
    .then(result => {
      res.status(200).send(result);
    })
    .catch(err => {
      console.log(err);
    });
});

router.put("/kategorijapromjene/:id", (req, res, next) => {
  let id = req.params.id;
  const { nazivKategorije } = req.body;
  KategorijaPromjene.update(
    { nazivKategorije },
    { where: { id }, attributes: ["nazivKategorije"], raw: true }
  )
    .then(function(result) {
      res.status(200).send(result);
    })
    .catch(next);
});

router.delete("/kategorijapromjene/:id", (req, res, next) => {
  const id = req.params.id;
  KategorijaPromjene.destroy({ where: { id }, attributes: ["nazivKategorije"], raw: true })
    .then(result => {
		console.log(result);
      res.status(200).send({'wohoo':result.toString()});
    })
    .catch(next);
});

module.exports = router;
