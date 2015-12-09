'use strict';

var express = require('express');
var User = require('../models/User');
var router  = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);

function registerUser (req, res) {
    //Verify input
        if (!req.body.username || !req.body.password) {
            res.status(403);
            res.json({error: 'Missing username or password'});
            return;
        }
    // find or create the user with the given username
    User.findOrCreate({username: req.body.username}, function(err, user, created) {
        if (created) {
            // if this username is not taken, then create a user record
            user.name = req.body.name;
            user.set_password(req.body.password);
            user.save(function(err) {
                if (err) {
                    res.status(403);
                    res.json({error: 'Unable to save user'});
                    return;
                }
                // create a token
                var token = User.generateToken(user.username);
                // return value is JSON containing the user's name and token
                res.json({name: user.name, token: token});
            });
        } else {
          // return an error if the username is taken
          res.status(403);
          res.json({error: 'Username is already taken'});
        }
    });
}

function loginUser (req, res) {
    //Verify input
        if (!req.body.username || !req.body.password) {
            res.status(403);
            res.json({error: 'Missing username or password'});
            return;
        }

    // find the user with the given username
    User.findOne({username: req.body.username}, function(err,user) {
        if (err) {
            res.sendStatus(403);
            return;
        }
    // validate the user exists and the password is correct
    if (user && user.checkPassword(req.body.password)) {
        // create a token
        var token = User.generateToken(user.username);
        // return value is JSON containing user's name and token
        res.json({name: user.name, token: token});
    } else {
        res.sendStatus(403);
    }
  });
}

module.exports = router;
