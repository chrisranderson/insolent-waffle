'use strict';
var React  = require('react');
var {showIf} = require('styles');
var api = require('server-api');
var HTMLEditor = require('./HTMLEditor')
var styles = require('styles')
var Input = require('Input')
var FavoriteButton = require('FavoriteButton')
var auth = require('auth')

var Exhibit = React.createClass({
    getDefaultProps: function () {
        return {
            exhibit: {
                code: ''
            },
            new: false
        }
    },

    getInitialState: function () {
        return {
            id: ++window.globalCounter,
            submitButtonText: "submit this exhibit"
        }
    },

    submit: function() {
        this.props.onSubmit({
            code: this.refs.code.getCode(),
            title: this.refs.title.value()
        })

        this.setState({
            submitButtonText: "Submitted!"
        })
    },

    // need a user and an exhibit id
    favoriteClicked: function(favorited) {
        if (favorited) {
            api.addFavorite(auth.getUsername(), this.props.exhibit._id, function () {


            })
        } else {
            api.removeFavorite(auth.getUsername(), this.props.exhibit._id, function (){

            })
        }
    },

    render: function() {
        return (
            <div style={styles.mix({marginTop:20}, this.props.style)}>
                <Input 
                    ref="title"
                    style={showIf(this.props.new === true)}
                    label="exhibit title"
                />
                <h4>
                    <FavoriteButton 
                        active={false} 
                        style={showIf(this.props.new === false)}
                        onClick={this.favoriteClicked}/>
                    {this.props.exhibit.title}
                </h4>
                <HTMLEditor 
                    id={this.state.id}
                    ref="code"
                    code={this.props.exhibit.code}
                    focus={this.props.new}/>
                <button 
                    className="submit-button"
                    onClick={this.submit} 
                    style={showIf(this.props.new === true)}>
                    {this.state.submitButtonText}
                </button>
            </div>
        );
    }
});

module.exports = Exhibit;