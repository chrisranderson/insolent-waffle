var api = {
    getCollections: function (cb) {
        $.get('/api/collections', cb)
    },

    getCollection: function(id, cb) {
        $.get(`/api/collections/${id}`, cb)
    },

    addExhibit: function(data, cb) {
        $.post(
            '/api/collections/' + data.collectionId + '/addExhibit', 
            data.exhibit, 
            cb
        )
    }
}

module.exports = api;