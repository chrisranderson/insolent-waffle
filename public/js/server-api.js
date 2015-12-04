var api = {
    getCollections: function (cb) {
        $.get('/api/collections', cb)
    },

    getCollection: function(id, cb) {
        $.get(`/api/collections/${id}`, cb)
    },

    addExhibit: function(data, cb) {
        $.post(data, '/api/exhibits')
    }
}

module.exports = api;