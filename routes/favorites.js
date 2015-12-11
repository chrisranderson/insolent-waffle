'use strict';

var express = require('express');
var User = require('../models/User');
var Exhibit = require('../models/Exhibit');
var router  = express.Router();

router.get('/:username', getFavorites);
router.post('/add', addFavorite);
router.post('/delete', deleteFavorite);

function addFavorite (req, res) {
    console.log("add favorite")
    User.findOne({username: req.body.username })
           .exec(function(error, user) {
               var newFavorites = user.favorites.concat(req.body.exhibitID);

               console.log("new favs", newFavorites)

               User.findByIdAndUpdate(user._id, {
                   favorites: newFavorites
               }, function(error, user){
                    if (!error) {
                        res.send("success")
                    } else {
                        console.log("error saving fav")
                    }
               })
           })
}

function deleteFavorite(req, res) {
    console.log("delete favorite");
    var idToDelete = req.body.exhibitID;

    User.findOne({username: req.body.username })
        .exec(function(error, user) {
            var newFavorites = user.favorites.filter(function(exhibit) {
                return exhibit !== idToDelete;
            })

            User.findByIdAndUpdate(user._id, {
                favorites: newFavorites
            })
        })
}

function getFavorites(req, res) {
    console.log("get favorites", req.params)

    User.findOne({username: req.params.username })
        .populate('favorites')
        .exec(function(error, user) {
            if (error) {
                console.log("error getting favs")
            } else {
                console.log("got favs", user.favorites)
                res.send(user.favorites)
            }
        })
}


module.exports = router;
