const express = require("express");
const router = express.Router();
const md5 = require("md5");
const jwt = require("jsonwebtoken");
const { Uloga } = require("../models");

router.post("/uloga", (req, res, next) => {
    const { naziv } = req.body;
    Uloga.create({ naziv })
        .then(result => {
            console.log(result);
            res.status(201).json({
                success: true
            });
        })
        .catch(err => {
            console.log(err);
        });
});

router.get("/uloga", (req, res, next) => {
    Uloga.findAll( /*{ where: {}, attributes: ["id", "naziv"], raw: true }*/ )
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {
            console.log(err);
        });
});

router.get("/uloga/:id", (req, res, next) => {
    let id = req.params.id;
    Uloga.findOne({
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

router.put("/uloga/:id", (req, res, next) => {
    let id = req.params.id;
    const { naziv } = req.body;
    Uloga.update({ naziv }, { where: { id }, attributes: ["id", "naziv"], raw: true })
        .then(function(result) {
            res.status(200).send(result);
        })
        .catch(next);
});

router.delete("/uloga/:id", (req, res, next) => {
    const id = req.params.id;
    Uloga.destroy({ where: { id }, attributes: ["id", "naziv"], raw: true })
        .then(result => {
            res.status(200).send({ 'wohoo': result.toString() });
        })
        .catch(next);
});

module.exports = router;