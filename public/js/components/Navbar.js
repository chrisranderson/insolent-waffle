'use strict';
var auth = require("auth.js");

var React  = require('react');
var {Link} = require('react-router')

var NavSearchbar = require('NavSearchbar');

var Navbar = React.createClass({

    // logout the user and redirect to home page
    logout: function(event) {
        auth.logout();
    },

    render: function() {
        return (
            <div>
                <nav className="blue navbar navbar-default" role="navigation">
                    <div className="container white-text">
                        <div className="navbar-header">
                            <button className="navbar-toggle" data-target="#bs-example-navbar-collapse-1" data-toggle="collapse" type="button">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"/>
                                <span className="icon-bar"/>
                                <span className="icon-bar"/>
                            </button>
                            <a className="navbar-brand" href="/">Web Exhibit</a>
                        </div>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                <li>
                                    {(!auth.loggedIn()) ? (<Link to="login">Log in</Link>) : (<a href="#" onClick={this.logout}>Log out {auth.getUsername()}</a>)}
                                </li>
                                <li>
                                    <NavSearchbar/>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="container">
                    {this.props.children}
                </div>
            </div>

        );
    }
});

module.exports = Navbar;
