const express = require("express");
const router = express.Router();
const md5 = require("md5");
const jwt = require("jsonwebtoken");
const jwtConfig = require("../config/jwt.json");
const { Promjena } = require("../models");
//const Promjena = require('../models').Promjena;

router.post("/promjena", (req, res, next) => {
  const {
    opis,
    prihvacena,
    prioritetPromjeneId,
    kategorijaPromjeneId,
    prijavio,
    izvrsitelj,
    odobrio
  } = req.body;
  Promjena.create({
    opis,
    prihvacena,
    prioritetPromjeneId,
    kategorijaPromjeneId,
    prijavio,
    izvrsitelj,
    odobrio
  })
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

router.get("/promjena", (req, res, next) => {
  Promjena.findAll({
    where: {},
    attributes: [
	"id",
      "opis",
      "prihvacena",
      "prioritetPromjeneId",
      "kategorijaPromjeneId",
      "prijavio",
      "izvrsitelj",
      "odobrio"
    ],
    raw: true
  })
    .then(result => {
      res.status(200).send(result);
    })
    .catch(err => {
      console.log(err);
    });
});

router.get("/promjena/:id", (req, res, next) => {
  let id = req.params.id;
  Promjena.findOne({
    where: { id },
    attributes: [
	"id",
      "opis",
      "prihvacena",
      "prioritetPromjeneId",
      "kategorijaPromjeneId",
      "prijavio",
      "izvrsitelj",
      "odobrio"
    ],
    raw: true
  })
    .then(result => {
      res.status(200).send(result);
    })
    .catch(err => {
      console.log(err);
    });
});

router.put("/promjena/:id", (req, res, next) => {
  let id = req.params.id;
  const {
    opis,
    prihvacena,
    prioritetPromjeneId,
    kategorijaPromjeneId,
    prijavio,
    izvrsitelj,
    odobrio
  } = req.body;
  Promjena.update(
    {
      opis,
      prihvacena,
      prioritetPromjeneId,
      kategorijaPromjeneId,
      prijavio,
      izvrsitelj,
      odobrio
    },
    {
      where: { id },
      attributes: [
        "opis",
        "prihvacena",
        "prioritetPromjeneId",
        "kategorijaPromjeneId",
        "prijavio",
        "izvrsitelj",
        "odobrio"
      ],
      raw: true
    }
  )
    .then(function(result) {
      res.status(200).send(result);
    })
    .catch(next);
});

router.delete("/promjena/:id", (req, res, next) => {
  const id = req.params.id;
  Promjena.destroy({
    where: { id },
    attributes: [
      "opis",
      "prihvacena",
      "prioritetPromjeneId",
      "kategorijaPromjeneId",
      "prijavio",
      "izvrsitelj",
      "odobrio"
    ],
    raw: true
  })
    .then(result => {
      res.status(200).send({'wohoo':result.toString()});
    })
    .catch(next);
});

module.exports = router;
