'use strict';
var React  = require('react');
var {showIf} = require('styles');
var api = require('server-api');
var HTMLEditor = require('./HTMLEditor')



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
            id: ++window.globalCounter
        }
    },

    submit: function() {
        this.props.onSubmit({
            code: this.refs.code.getCode()
        })
    },


    render: function() {
        return (
            <div style={{marginTop:20}}>
                <HTMLEditor 
                    id={this.state.id}
                    ref="code"
                    code={this.props.exhibit.code}/>
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