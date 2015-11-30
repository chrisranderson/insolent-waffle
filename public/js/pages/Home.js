'use strict';
var React  = require('react');
var Searchbar = require('./Searchbar');

var Home = React.createClass({

    render: function() {
        var rowMargin = {
            marginBottom: 30
        }

        return (
            <div className="container white-text">
                <div className="row" style={rowMargin}>
                    <h1>Welcome to Web Exhibit!</h1>
                    <div className="h1-subtitle">
                        An (eventually) comprehensive gallery of HTML and CSS examples, for your learning pleasure.
                    </div>
                </div>
                <div className="row">
                    <Searchbar />
                </div>
            </div>

        );
    }
});

module.exports = Home;