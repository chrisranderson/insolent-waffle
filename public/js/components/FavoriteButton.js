'use strict';
var React  = require('react');
var auth = require('auth');

// glyphicon glyphicon-star
// glyphicon glyphicon-star-empty

var FavoriteButton = React.createClass({
    getDefaultProps: function () {
        return {
            onClick: function(){}
        }
    },

    getInitialState: function () {
        return {
            active: this.props.active
        }
    },

    onClick: function () {
        this.setState({
            active: !this.state.active
        })

        this.props.onClick(!this.state.active);
    },

    render: function() {
        var icon = this.state.active? "glyphicon-star" : "glyphicon-star-empty";
        
        if (!auth.loggedIn()) {
            return null;
        }
        
        return (
            <span 
                style={this.props.style}
                onClick={this.onClick}
                className={` favorite-button glyphicon ${icon}`} 
                aria-hidden="true">
            </span> 
        );
    }
});

module.exports = FavoriteButton;