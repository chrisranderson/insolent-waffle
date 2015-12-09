'use strict';

var express = require('express');
var Collection = require('../models/Collection');
var Exhibit = require('../models/Exhibit');
var router  = express.Router();

router.get('/', getCollections);
router.get('/:id', getCollection);
router.post('/:id/addExhibit', addExhibit)


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

function addExhibit (req, res) {
    console.log(req.body)
    console.log(req.body.exhibit)

    
    var exhibit = new Exhibit({code: req.body.code, title: req.body.title}).save(function(e, exhibit) {
        var parentCollection = Collection.findOne({_id: req.params.id}, function (e, collection) {

            console.log(exhibit)


            Collection.findByIdAndUpdate(collection._id, {
                exhibits: collection.exhibits.concat(exhibit._id)
            }, function(){
                res.send('success')
            })
        })
    });
}


module.exports = router;