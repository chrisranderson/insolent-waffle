var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CollectionSchema = new Schema({
    title: String,
    summary: {
        type: String, 
        default: 'No summary yet.'
    },
    category: String
});

var Collection = mongoose.model('Collection', CollectionSchema);

module.exports = Collection;