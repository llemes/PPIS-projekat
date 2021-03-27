const express = require("express");
const router = express.Router();
const md5 = require("md5");
const jwt = require("jsonwebtoken");
const { PrioritetDogadjaja } = require("../models");
//const PrioritetDogadjaja = require('../models').PrioritetDogadjaja;

router.post("/prioritetdogadjaja", (req, res, next) => {
    const { naziv } = req.body;
    PrioritetDogadjaja.create({ naziv })
        .then(result => {
            res.status(201).json({
                success: true
            });
        })
        .catch(err => {
            console.log(err);
        });
});

router.get("/prioritetdogadjaja", (req, res, next) => {
    PrioritetDogadjaja.findAll({ where: {}, attributes: ["id", "naziv"], raw: true })
        .then(result => {
            res.status(200).send(result);
        })
        .catch(err => {
            console.log(err);
        });
});

router.get("/prioritetdogadjaja/:id", (req, res, next) => {
    let id = req.params.id;
    PrioritetDogadjaja.findOne({
            where: { id },
            attributes: ["id", "naziv"],
            raw: true
        })
        .then(result => {
            res.status(200).send(result);
        })
        .catch(err => {
            console.log(err);
        });
});

router.put("/prioritetdogadjaja/:id", (req, res, next) => {
    let id = req.params.id;
    const { naziv } = req.body;
    PrioritetDogadjaja.update({ naziv }, { where: { id }, attributes: ["naziv"], raw: true })
        .then(function(result) {
            res.status(200).send(result);
        })
        .catch(next);
});

router.delete("/prioritetdogadjaja/:id", (req, res, next) => {
    const id = req.params.id;
    PrioritetDogadjaja.destroy({ where: { id }, attributes: ["naziv"], raw: true })
        .then(result => {
            res.status(200).send({ 'wohoo': result.toString() });
        })
        .catch(next);
});

module.exports = router;