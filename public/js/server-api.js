var api = {
    getCollections: function (cb) {
        $.get('./collections', cb)
    }
}

module.exports = api;