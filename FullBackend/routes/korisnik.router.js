const express = require("express");
const router = express.Router();
const md5 = require("md5");
const jwt = require("jsonwebtoken");
const config = require('../config/configuration.js');
const { Korisnik } = require("../models");
//const Korisnik = require('../models').Korisnik;

router.post("/korisnik", (req, res, next) => {
    const { firstName, lastName, username, password, ulogaId } = req.body;
    Korisnik.create({
            firstName,
            lastName,
            username,
            password: md5(password),
            ulogaId
        })
        .then(result => {
            const claims = {
                userId: result.id,
                name: firstName + " " + lastName,
                username: username,
                permissions: "user"
            };
            var token = jwt.sign(claims, config.jwt, {
                expiresIn: "1000d"
            });
            res.status(201).json({
                success: true,
                token: token
            });
        })
        .catch(err => {
            console.log(err);
        });
});

router.get("/korisnik", (req, res, next) => {
    Korisnik.findAll({
            where: {},
            attributes: ["id", "firstName", "lastName", "username", "password", "ulogaId"],
            raw: true
        })
        .then(result => {
            res.status(200).send(result);
        })
        .catch(err => {
            console.log(err);
        });
});

router.get("/korisnik/:id", (req, res, next) => {
    let id = req.params.id;
    Korisnik.findOne({
            where: { id },
            attributes: ["id", "firstName", "lastName", "username", "password", "ulogaId"],
            raw: true
        })
        .then(result => {
            res.status(200).send(result);
        })
        .catch(err => {
            console.log(err);
        });
});

router.put("/korisnik/:id", (req, res, next) => {
    let id = req.params.id;
    const { firstName, lastName, username, password, ulogaId } = req.body;
    Korisnik.update({ firstName, lastName, username, password: md5(password), ulogaId }, {
            where: { id },
            attributes: ["firstName", "lastName", "username", "password", "ulogaId"],
            raw: true
        })
        .then(function(result) {
            res.status(200).send(result);
        })
        .catch(next);
});

router.delete("/korisnik/:id", (req, res, next) => {
    const id = req.params.id;
    Korisnik.destroy({
            where: { id },
            attributes: ["firstName", "lastName", "username", "password", "ulogaId"],
            raw: true
        })
        .then(result => {
            res.status(200).send({ 'wohoo': result.toString() });
        })
        .catch(next);
});

module.exports = router;