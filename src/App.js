import React, { Component } from 'react';
//import { Link } from 'react-router';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import GameSetupContainer from './containers/GameSetupContainer'
import LiveGameContainer from './containers/LiveGameContainer'
import GameStatsContainer from './containers/GameStatsContainer'
import NewTeamForm from './containers/NewTeamForm'


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/Setup" render={() =><GameSetupContainer/>}/>
          <Route path="/Live" render={() =><LiveGameContainer/>}/>
          <Route path="/NewTeam" render={() =><NewTeamForm/>}/>
          <Route path="/Stats" render={() =><GameStatsContainer/>}/>

          <div className="App">
            <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h2>Score kids</h2>
            </div>
            <p className="App-intro">
              Start page!
              <ul>
                <li><Link to="/Setup" activeStyle={{ color: 'red' }}>Setup</Link></li>
                <li><Link to="/Live" activeStyle={{ color: 'red' }}>Live Game</Link></li>
                <li><Link to="/NewTeam" activeStyle={{ color: 'red' }}>Create a Team</Link></li>
                <li><Link to="/Stats" activeStyle={{ color: 'red' }}>Stat page</Link></li>
              </ul>
            </p>
          </div>
        </Switch>
      </Router>
    );
  }
}

export default App;
