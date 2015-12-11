var _ = require('underscore')

var styles = {
    showIf: function (condition) {
        if (condition) {
            return {
                display: 'initial'
            }
        } else {
            return {
                display: 'none'
            }
        }

    },

    mix: function(first, second) {
        var copy = _.extend({}, first);
        return _.extend(copy, second);
    }
}

module.exports = styles;