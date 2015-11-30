var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var exhibitSchema = new Schema({
    code: String
})

var Exhibit = mongoose.model('Exhibit', exhibitSchema);

module.exports = Exhibit;