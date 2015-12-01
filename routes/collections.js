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
    Collection.findById(req.params.id, function(error, collection) {
        res.send(collection);
    })
}

module.exports = router;