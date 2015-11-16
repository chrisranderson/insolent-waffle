var React = require('react')
var ReactDOM = require('react-dom')
var {Router, Link, Route} = require('react-router')
var Navbar = require('./Navbar')
var Home = require('./pages/Home')


var App = React.createClass({
  render: function() {
    return (
        <div>
            <Navbar/>
            {this.props.children}
        </div>
    );
  }
});


// Run the routes
var routes = (
      <Router>
        <Route name="app" path="/" component={App}>
          <Route name="page" path="/" component={Home} />
          <Route path="*" component={Home}/>
        </Route>
      </Router>
);

ReactDOM.render(routes, document.body);
