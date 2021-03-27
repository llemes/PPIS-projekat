const express = require("express");
const router = express.Router();
const md5 = require("md5");
const jwt = require("jsonwebtoken");
const { StatusDogadjaja } = require("../models");
//const StatusDogadjaja = require('../models').StatusDogadjaja;

router.post("/statusdogadjaja", (req, res, next) => {
    const { status } = req.body;
    StatusDogadjaja.create({ status })
        .then(result => {
            res.status(201).json({
                success: true
            });
        })
        .catch(err => {
            console.log(err);
        });
});

router.get("/statusdogadjaja", (req, res, next) => {
    StatusDogadjaja.findAll({ where: {}, attributes: ["id", "status"], raw: true })
        .then(result => {
            res.status(200).send(result);
        })
        .catch(err => {
            console.log(err);
        });
});

router.get("/statusdogadjaja/:id", (req, res, next) => {
    let id = req.params.id;
    StatusDogadjaja.findOne({
            where: { id },
            attributes: ["id", "status"],
            raw: true
        })
        .then(result => {
            res.status(200).send(result);
        })
        .catch(err => {
            console.log(err);
        });
});

router.put("/statusdogadjaja/:id", (req, res, next) => {
    let id = req.params.id;
    const { status } = req.body;
    StatusDogadjaja.update({ status }, { where: { id }, attributes: ["status"], raw: true })
        .then(function(result) {
            res.status(200).send(result);
        })
        .catch(next);
});

router.delete("/statusdogadjaja/:id", (req, res, next) => {
    const id = req.params.id;
    StatusDogadjaja.destroy({ where: { id }, attributes: ["status"], raw: true })
        .then(result => {
            res.status(200).send({ 'wohoo': result.toString() });
        })
        .catch(next);
});

module.exports = router;