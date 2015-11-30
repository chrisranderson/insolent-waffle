var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var exhibitPageSchema = new Schema({
    title: String,
    summary: {
        type: String, 
        default: 'No summary yet.'
    },
    category: String,
    exhibits: [{
        type: Schema.ObjectId, 
        ref: 'Exhibit'
    }]
});

var ExhibitPage = mongoose.model('ExhibitPage', exhibitPageSchema);

module.exports = ExhibitPage;