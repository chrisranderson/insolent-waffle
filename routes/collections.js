'use strict';

var express = require('express');
var Collection = require('../models/Collection');
var router  = express.Router();

router.get('/', getCollections);

function getCollections (req, res) {
    Collection.find(function(error, collections){
        console.log("collections: ", collections)
        res.send(collections);
    })
}

module.exports = router;