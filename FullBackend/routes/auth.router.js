const express = require("express");
const router = express.Router();
const md5 = require("md5");
const jwt = require("jsonwebtoken");
const config = require("../config/jwt.json");
const { Korisnik } = require("../models");

router.post("/login", (req, res, next) => {
  const { username, password } = req.body;
  Korisnik.findOne({
    where: {
      username,
      password: md5(password)
    },
    attributes: ["id", "firstName", "lastName", "username", "ulogaId"],
    raw: true
  })
    .then(result => {
      const { id, firstName, lastName, username, ulogaId } = result;
      const claims = {
        userId: id,
        name: firstName + " " + lastName,
        username,
        ulogaId,
        permissions: "user"
      };
      const token = jwt.sign(claims, config.secret, {
        expiresIn: "1000d"
      });
      res.status(200).json({ token });
    })
    .catch(err => {
      console.log(err);
      res.status(404).json({
        message: "No user found for given username/password combination!"
      });
    });
});

router.post("/register", (req, res, next) => {
  const { username, firstName, lastName, password } = req.body;
  Korisnik.create({ username, firstName, lastName, password: md5(password) })
    .then(result => {
      const claims = {
        userId: result.id,
        name: firstName + " " + lastName,
        username: username,
        permissions: "user"
      };
      var token = jwt.sign(claims, config.secret, {
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

router.use(function(req, res, next) {
    var token = req.body.token || req.query.token || req.headers['x-access-token'];
    if (token) {
        jwt.verify(token, config.secret, function(err, decoded) {      
            if (err) {
                return res.json({ success: false, message: 'Failed to authenticate token.' });    
            } else {
                req.decoded = decoded;    
                next();
            }
        });
    } else {
        return res.status(403).send({ 
            success: false, 
            message: 'No token provided.' 
        });
    }
});


module.exports = router;