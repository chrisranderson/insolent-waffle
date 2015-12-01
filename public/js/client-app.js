var React = require('react')
var ReactDOM = require('react-dom')
var {Router, Link, Route, IndexRoute} = require('react-router')
var Navbar = require('./Navbar');
var Home = require('./pages/Home');
var Collection = require('./pages/Collection');


var App = React.createClass({
  render: function() {
    return (
        <div className='blue'>
            <Navbar/>
            {this.props.children}
        </div>
    );
  }
});

// a
// Run the routes 
var routes = (
      <Router>
        <Route name="app" path="/" component={App}>
          <IndexRoute component={Home} />
          <Route path="collections/:id" component={Collection}/>
          <Route path="*" component={Home}/>
        </Route>
      </Router>
);

ReactDOM.render(routes, document.getElementById('content'));
