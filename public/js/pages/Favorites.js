'use strict';
var React  = require('react');
var api = require('server-api')
var auth = require('auth')
var ExhibitList = require('ExhibitList')

var Favorites = React.createClass({
    getInitialState: function() {
        return {
            exhibits: []
        }
    },

    componentDidMount: function () {
        api.getFavorites(auth.getUsername(), (exhibits) =>{
            this.setState({
                exhibits: exhibits
            })
        })

    },

    render: function() {
        return (

            <div className="container white-text">
                <h2>Favorites</h2>
                {this.state.exhibits.length === 0?
                    (<h3>No favorites yet.</h3>) :
                    (<ExhibitList
                        exhibits={this.state.exhibits}/>)
                }
            </div>

        );
    }
});

module.exports = Favorites;