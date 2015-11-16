'use strict';
var React  = require('react');
var Searchbar = require('./Searchbar');

var Home = React.createClass({

    render: function() {
        return (

            <div className="container white-text">
                <h1>Welcome to Web Exhibit!</h1>
                <div className="h1-subtitle">
                    An (eventually) comprehensive gallery of HTML and CSS examples, for your learning pleasure.
                </div>
                <Searchbar />
            </div>

        );
    }
});

module.exports = Home;