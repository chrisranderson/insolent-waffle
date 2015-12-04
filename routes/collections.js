'use strict';

var express = require('express');
var Collection = require('../models/Collection');
var router  = express.Router();

router.get('/', getCollections);
router.get('/:id', getCollection);

function getCollections (req, res) {
    Collection.find(function(error, collections){
        res.send(collections);
    })
}

function getCollection (req, res) {
    Collection.findOne({_id: req.params.id})
        .populate('exhibits')
        .exec(function(error, collection) {
            res.send(collection);
        })
}


module.exports = router;