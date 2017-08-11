import React, { Component } from 'react';
//import { Link } from 'react-router';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { Button, Container } from 'semantic-ui-react'

import GameSetupContainer from './containers/GameSetupContainer'
import LiveGameContainer from './containers/LiveGameContainer'
import GameStatsContainer from './containers/GameStatsContainer'
import NewTeamForm from './containers/NewTeamForm'


class App extends Component {
  constructor(){
    super()

    this.state = {
      homeTeam: {},
      awayTeam: {}
    }

  }

  setHomeTeam(value){
    console.log("app home change")
    this.setState({ homeTeam: value})
  }

  setAwayTeam(value){
    console.log("app away change")
    this.setState({ awayTeam: value})
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/Setup" render={() =><GameSetupContainer setHome={this.setHomeTeam.bind(this)} setAway={this.setAwayTeam.bind(this)}/>}/>
          <Route path="/Live" render={() =><LiveGameContainer homeTeam={this.state.homeTeam} awayTeam={this.state.awayTeam}/>}/>
          <Route path="/NewTeam" render={() =><NewTeamForm/>}/>
          <Route path="/Stats" render={() =><GameStatsContainer/>}/>

          <div className="App">
            <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h2>Score kids</h2>
            </div>
            <p className="App-intro">
              <div>
                <ul>
                  <br/>
                  <br/>
                  <br/>
                    <Link to="/Setup" activeStyle={{ color: 'red' }}><Container><Button className="Homepage-button" size="massive" color="blue">Start New Game</Button></Container></Link>
                  <br/>
                  <br/>
                  <br/>
                    <Link to="/NewTeam" activeStyle={{ color: 'red' }}><Container><Button className="Homepage-button" size="massive" color="blue">Create a Team</Button></Container></Link>
                </ul>
              </div>
            </p>
          </div>
        </Switch>
      </Router>
    );
  }
}
// <br/>
// <Link to="/Live" activeStyle={{ color: 'red' }}><Container><Button className="Homepage-button" size="massive" color="blue">Live Game</Button></Container></Link>
// <br/>
//   <Link to="/Stats" activeStyle={{ color: 'red' }}><Container><Button className="Homepage-button" size="massive" color="blue">Stat page</Button></Container></Link>

export default App;
