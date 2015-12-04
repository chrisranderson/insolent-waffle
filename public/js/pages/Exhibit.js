'use strict';
var React  = require('react');
var {showIf} = require('styles');
var api = require('server-api');

var Exhibit = React.createClass({
    getDefaultProps: function () {
        return {
            exhibit: {},
            new: false
        }
    },

    submit: function() {
        this.props.onSubmit({
            code: this.refs.code.getCode()
        })
    },

    render: function() {
        return (
            <div>
                <span ref="code">Codemirror stuff goes here.</span>
                <button 
                    className="submit-button"
                    onClick={this.submit} 
                    style={showIf(this.props.new === true)}>
                    Submit this exhibit
                </button>
            </div>
        );
    }
});

module.exports = Exhibit;