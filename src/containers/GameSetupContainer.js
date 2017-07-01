import React from 'react'
import TeamSelect from '../components/TeamSelect'
import GameSelector from '../components/GameSelector'
import { Row, Col} from 'react-flexbox-grid'
import {  } from 'react-bootstrap'

export default class GameSetupContainer extends React.Component {
  constructor(){
    super()

    this.state = {
      homeTeam: [],
      awayTeam: [],
      homePlayers: [],
      awayPlayers: [],
      teams: [],
      gameLocation: "",
      gameDuration: "",
      gameDate: ""
    }

  }

componentDidMount(){
    fetch('http://localhost:3000/api/v1/teams')
            .then(res => res.json())
            .then(data => this.setState({teams: data}))

    }




  render(){
    return(
    <div className="setup-page">
      <Row middle='xs'>
        <h1>Game Setup Page</h1>
      </Row>
      <Row middle='xs'>
        <Col md={6}><TeamSelect teams={this.state.teams}/>Home Team</Col>
        <Col md={6}><TeamSelect teams={this.state.teams}/>Away Team</Col>

      </Row>
      <GameSelector />

    </div>
   )
  }
}
