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
    },

    addFavorite: function(username, exhibitID, cb) {
        $.post('/api/favorites/add', {
            username: username,
            exhibitID: exhibitID
        }, cb)
    },

    removeFavorite: function(username, exhibitID, cb) {
        $.post('/api/favorites/delete', {
            username: username,
            exhibitID: exhibitID
        }, cb);
    },

    getFavorites: function(username, cb) {
        console.log("getting favs for", username)
        $.get('/api/favorites/' + username, cb)
    }
}

module.exports = api;