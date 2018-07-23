import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'purple',
  textDecoration: 'none',
  color: 'white',
}

const Navbar = () =>
  <div>
  <br />
    <NavLink
      to="/"
      exact style={link}
      activeStyle={{
        background: 'darkblue'
      }}
    >Home</NavLink>
    <NavLink
      to="/about"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
    >About</NavLink>
    <NavLink
      to="/login"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
    >Login</NavLink>
    <br />
    <br />
    <br />
    <br />
  </div>;





const Home = () => {
  return (
    <div>
      <h1>Home!</h1>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <h1>This is my about component!</h1>
    </div>
  );
};

const Login = () => {
  return (
    <div>
      <form>
        <div>
        <label htmlFor="username">Username: </label>
          <input type="text" name="username" placeholder="Username" />

        </div>
        <div>
        <label htmlFor="password">Password: </label>
          <input type="password" name="password" placeholder="Password" />
        </div>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

ReactDOM.render(
  <Router>
  <React.Fragment>
  <Navbar />

  <Route exact path="/" component={Home} />
  <Route exact path="/about" component={About} />
  <Route exact path="/login" component={Login} />
  </React.Fragment>
  </Router>,
  document.getElementById('root')
);
