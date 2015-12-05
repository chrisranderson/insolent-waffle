'use strict';
var React  = require('react');
var Searchbar = require('Searchbar');
var {Link, History, Lifecycle} = require('react-router');
var {createHistory, useBasename} = require('history')

var history = useBasename(createHistory)({
    basename: '/transitions'
})

var Home = React.createClass({
    mixins: [Lifecycle, History],

    itemSelected: function (route) {
        route = route.substr(2);
        this.history.pushState(null, route);
    },

    render: function() {
        var rowMargin = {
            marginBottom: 30
        }

        return (
            <div className="container white-text">
                <div className="row" style={rowMargin}>
                    <h1>Web Exhibit</h1>
                    <div className="h1-subtitle">
                        An eventually comprehensive gallery of HTML and CSS examples, for your learning pleasure.
                    </div>
                </div>
                <div className="row">
                    <Searchbar itemSelected={this.itemSelected}/>
                </div>
            </div>

        );
    },

    routerWillLeave() {
        // if (this.state.textValue)
        //   return 'You have unsaved information, are you sure you want to leave this page?'
    },
});

module.exports = Home;