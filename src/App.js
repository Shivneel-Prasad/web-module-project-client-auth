import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import PrivateRoute from './Components/PrivateRoute';
import Login from './Components/Login';
import Logout from './Components/Logout';
import FriendsList from './Components/FriendsList';

function App() {
  const isLoggedIn = localStorage.getItem('token')

  return (
    <Router>
    <div className='App'>
      <ul>

        <ol>
          <h2>Friends Database</h2>
        </ol>

        <ol>
          <Link to="/login">Login</Link>
        </ol>

        <ol>
          <Link to='/friends'>FriendsList</Link>
        </ol>

        <ol>
          <Link to='/friends/add'>AddFriend</Link>
        </ol>

        <ol>
          <Link to="/logout">Logout</Link>
        </ol>

      </ul>
      <Switch>
        <PrivateRoute path='/protected' component={FriendsList} />
        <Route path='/logout' component={Logout} />
        <Route path='/login' component={Login} />
        <Route path="/" component={Login} /> 
      </Switch>
    </div>
  </Router>
  )
}

export default App;
