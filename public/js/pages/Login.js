var React = require("react");
var ReactRouter = require("react-router");
var History = ReactRouter.History;

var auth = require("../auth.js");

// Login page, shows the login form and redirects to the list if login is successful
var Login = React.createClass({
  // mixin for navigation
  mixins: [ History ],

  // initial state
  getInitialState: function() {
    return {
      login_error: false,
      register_error: false
    };

  },

  // handle login button submit
  login: function(event) {
    // prevent default browser submit
    event.preventDefault();
    // get data from form
    var username = this.refs['login-username'].value;
    var password = this.refs['login-password'].value;
    if (!username || !password) {
      return;
    }
    // login via API
    auth.login(username, password, function(loggedIn) {
      // login callback
      if (!loggedIn)
        return this.setState({
          login_error: true
        });
      this.history.pushState(null, '/');
    }.bind(this));
  },

  register: function(event) {
    event.preventDefault();
    var username = this.refs['register-username'].value;
    var password = this.refs['register-password'].value;
    var name = this.refs['register-name'].value;

    if (!username || !password) {
      return;
    }

    auth.register(name, username, password, function(cb) {
      if (!cb)
        return this.setState({
          register_error: true
        });
      this.history.pushState(null, '/');
    }.bind(this));
  },

  // show the login form
  render: function() {
    return (
      <div className='login-div'>

        <ul className="nav nav-pills">
          <li className="active"><a data-toggle="tab" href="#login-tab">Login</a></li>
          <li><a data-toggle="tab" href="#register-tab">Register</a></li>
        </ul>

        <div className="tab-content">
          <div id="login-tab" className="tab-pane fade in active">
            <form className="form-vertical" onSubmit={this.login}>
              <input className="searchbar" type="text" placeholder="Username" ref="login-username" autoFocus={true} /><br/>
              <input className="searchbar" type="password" placeholder="Password" ref="login-password"/><br/>
              <input className="submit-button" type="submit" value="Login" />
              {this.state.login_error ? (
                 <div className="alert">Invalid username or password.</div>
               ) : null}
            </form>
          </div>
          <div id="register-tab" className="tab-pane fade">
            <form className="form-vertical" onSubmit={this.register}>
              <input className="searchbar" type="text" placeholder="Name" ref="register-name" autoFocus={true} /><br/>
              <input className="searchbar" type="text" placeholder="Username" ref="register-username" autoFocus={true} /><br/>
              <input className="searchbar" type="password" placeholder="Password" ref="register-password"/><br/>
              <input className="submit-button" type="submit" value="Register" />
              {this.state.register_error ? (
                 <div className="alert">Invalid username.</div>
               ) : null}
            </form>
          </div>
        </div>

      </div>
    );
  }
});

module.exports = Login;
