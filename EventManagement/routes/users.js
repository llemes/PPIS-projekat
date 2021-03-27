const express = require('express')
const router = express.Router();
const md5 = require('md5');
const jwt = require('jsonwebtoken');
const jwtConfig = require('../config/jwt.json');
const { User } = require('../models');


router.post('/login', (req, res, next) => {
    const { username, password } = req.body;
    User.findOne({
        where: {
            username,
            password: md5(password)
        },
        attributes: ['id', 'firstName', 'lastName', 'username'],
        raw: true,
    }).then((result) => {
        const { id, firstName, lastName, username } = result;
        const claims = {
            userId: id,
            name: firstName + " " + lastName,
            username,
            permissions: "user"
        };
        const token = jwt.sign(claims, jwtConfig.secret, {
            expiresIn: "1000d"
        });
        res.status(200).json({ token });
    }).catch((err) => {
        res.status(404).json({
            message: 'No user found for given username/password combination!'
        });
    });
});

// REGISTER
router.post('/register', (req, res, next) => {
    const { username, firstName, lastName, password } = req.body;
    User.create({ username, firstName, lastName, password: md5(password) })
    .then((result) => {
        const claims = {
            userId: result.id,
            name: firstName + " " + lastName,
            username: username,
            permissions: 'user'
        };
        var token = jwt.sign(claims, jwtConfig.secret, {
            expiresIn: "1000d"
        });
        res.status(201).json({
            success: true,
            token: token
        });
    }).catch((err) => {
        console.log(err);
    });

});

router.put('/update/:id', (req, res, next) => {
    const { id } = req.params;
    const { username, firstName, lastName, password } = req.body;
    User.update(
        { username, firstName, lastName, password: md5(password) },
        { where: { id } }
    )
        .then(function (rowsUpdated) {
            res.json(rowsUpdated)
        })
        .catch(next)
})


router.put('/delete/:id', (req, res, next) => {
    const { id } = req.params;
    User.destroy(
        { where: { id } }
    )
        .then(function (rowsUpdated) {
            res.json(rowsUpdated)
        })
        .catch(next)
})


router.use(function(req, res, next) {
    var token = req.body.token || req.query.token || req.headers['x-access-token'];
    if (token) {
        jwt.verify(token, jwtConfig.secret, function(err, decoded) {      
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

// GET ALL PROGRAMS
router.get('/', (req, res, next) => {
    const id = req.decoded.userId;
    User.findOne({
        where: {id},
        raw: true,
        attributes: ['firstName','lastName','username']
    }).then((result) => {
       res.status(200).json(result); 
    }).catch(next);
})

module.exports = router;