'use strict';
var React  = require('react');

var Searchbar = React.createClass({
    getInitialState: function () {
        return {
            value: ''
        }
    },

    onChange: function (event) {
        this.setState({
            value: event.target.value
        })
    },

    render: function() {

        return (
            <div className="col-md-offset-2 col-md-8">
                <label htmlFor='query'>Search for any HTML element or CSS attribute</label>
                <br/>
                <input className="searchbar" name='query' 
                    type='text' 
                    onChange={this.onChange} 
                    placeholder='e.g. "background" or "input"'
                    value={this.state.value}/>
            </div>
        );
    }
});

module.exports = Searchbar;