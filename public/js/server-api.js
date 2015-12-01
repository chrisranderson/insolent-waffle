var api = {
    getCollections: function (cb) {
        $.get('/api/collections', cb)
    },

    getCollection: function(id, cb) {
        $.get(`/api/collections/${id}`, cb)
    }
}

module.exports = api;