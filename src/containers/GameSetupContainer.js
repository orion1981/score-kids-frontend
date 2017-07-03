import React from 'react'
import TeamSelect from '../components/TeamSelect'
import GameSelector from '../components/GameSelector'
import { Row, Col} from 'react-flexbox-grid'
import {  } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class GameSetupContainer extends React.Component {
  constructor(){
    super()

    this.state = {
      homeTeam: {},
      awayTeam: {},
      homePlayers: [],
      awayPlayers: [],
      teams: [],
      gameLocation: "",
      gameDuration: "",
      gameDate: ""
    }

    this.submitHandler = this.submitHandler.bind(this)
  }

componentDidMount(){
    fetch('http://localhost:3000/api/v1/teams')
            .then(res => res.json())
            .then(data => this.setState({teams: data}))

    }

 submitHandler(e){
   console.log(e,"submitHandler")

 }

 handleHomeChange(e, {value}) {
   console.log(' home team pick',value, e)
  this.setState({ homeTeam: value})

 }

 handleAwayChange(e, {value}) {
   console.log(' away team pick',value, e)
  this.setState({ awayTeam: value})
 }

  render(){
    return(
      <form onSubmit={ e => this.submitHandler(e)}>
        <div className="setup-page">
          <Row middle='xs'>
            <h1>Game Setup Page</h1>
          </Row>
          <Row middle='xs'>
            <Col md={6}><TeamSelect teams={this.state.teams}  handleChange={this.handleHomeChange.bind(this)} />Home Team</Col>
            <Col md={6}><TeamSelect teams={this.state.teams}  handleChange={this.handleAwayChange.bind(this)} />Away Team</Col>


          </Row>
          <GameSelector />
              <Link to="/Live"><input type="submit" value="submit" /></Link>
        </div>
      </form>
   )
  }
}
