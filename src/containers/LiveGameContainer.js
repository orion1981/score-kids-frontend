import React from 'react'
import StatBar from '../components/StatBar'
import Player from '../components/Player'
import { Button } from 'semantic-ui-react'
import { Row, Col } from 'react-flexbox-grid'
import {withRouter} from 'react-router-dom'
import GameStatsContainer from '../containers/GameStatsContainer'

class LiveGameContainer extends React.Component {
  constructor(props){
    super(props)

    this.state ={

      overlay: "none",
      homeScore: 0,
      awayScore: 0,
      homeShots: 0,
      awayShots: 0,
      homeAssists: 0,
      playersStats: {
        awayGoalie:{
          playerId: this.props.awayTeam.players[5].id,
          playerName: this.props.awayTeam.players[5].name,
          goals: 0,
          shots: 0,
          assists: 0,
          saves: 0
        },
        awayCenter:{
          playerId: this.props.awayTeam.players[0].id,
          playerName: this.props.awayTeam.players[0].name,
          goals: 0,
          shots: 0,
          assists: 0
        },
        awayLeftWing:{
          playerId: this.props.awayTeam.players[1].id,
          playerName: this.props.awayTeam.players[1].name,
          goals: 0,
          shots: 0,
          assists: 0
        },
        awayRightWing:{
          playerId: this.props.awayTeam.players[2].id,
          playerName: this.props.awayTeam.players[2].name,
          goals: 0,
          shots: 0,
          assists: 0
        },
        awayLeftDefender:{
          playerId: this.props.awayTeam.players[3].id,
          playerName: this.props.awayTeam.players[3].name,
          goals: 0,
          shots: 0,
          assists: 0
        },
        awayRightDefender:{
          playerId: this.props.awayTeam.players[4].id,
          playerName: this.props.awayTeam.players[4].name,
          goals: 0,
          shots: 0,
          assists: 0
        },
        homeGoalie:{
          playerId: this.props.homeTeam.players[5].id,
          playerName: this.props.homeTeam.players[5].name,
          goals: 0,
          shots: 0,
          assists: 0,
          saves: 0,
        },
        homeCenter:{
          playerId: this.props.homeTeam.players[0].id,
          playerName: this.props.homeTeam.players[0].name,
          goals: 0,
          shots: 0,
          assists: 0
        },
        homeLeftWing:{
          playerId: this.props.homeTeam.players[1].id,
          playerName: this.props.homeTeam.players[1].name,
          goals: 0,
          shots: 0,
          assists: 0
        },
        homeRightWing:{
          playerId: this.props.homeTeam.players[2].id,
          playerName: this.props.homeTeam.players[2].name,
          goals: 0,
          shots: 0,
          assists: 0
        },
        homeLeftDefender:{
          playerId: this.props.homeTeam.players[3].id,
          playerName: this.props.homeTeam.players[3].name,
          goals: 0,
          shots: 0,
          assists: 0
        },
        homeRightDefender:{
          playerId: this.props.homeTeam.players[4].id,
          playerName: this.props.homeTeam.players[4].name,
          goals: 0,
          shots: 0,
          assists: 0
        },

      }

    }

      console.log(props)
      this.createGame = this.createGame.bind(this)
      this.collectPlayerStats = this.collectPlayerStats.bind(this)
  }





  collectPlayerStats(playerStatObj) {
    console.log(playerStatObj)

    //let prevPlayerStat = {playersStats:{[playerStatObj.role]:[playerStatObj.stat][0]}}
    let individualStats = Object.assign({},this.state.playersStats[playerStatObj.role],{[playerStatObj.stat]:[playerStatObj.value]})
    let playerStats = {[playerStatObj.role]:individualStats}
    //let stat = {Object.assign({},this.state.playersStats,{[playerStatObj.role]:{[playerStatObj.stat]:[playerStatObj.value][0]}})}
    let aggregateStats = Object.assign({},this.state.playersStats,playerStats)
    var playersStats = {playersStats:aggregateStats}
    //this.setState((prevstate) => { prevPlayerStat : prevstate.stat } )
    this.setState( Object.assign({},this.state,playersStats) )
  }



  addHomeGoal(){

      this.setState({ homeScore: this.state.homeScore + 1})
      console.log("adding home goal")
  }

  addAwayGoal(){
      this.setState({ awayScore: this.state.awayScore + 1})
  }

  subtractHomeGoal(){
      this.setState({ homeScore: this.state.homeScore - 1})
  }

  subtractAwayGoal(){
      this.setState({ awayScore: this.state.awayScore - 1})
  }

  addHomeShot(){
      this.setState({ homeShots: this.state.homeShots + 1})
  }

  addAwayShot(){
      this.setState({ awayShots: this.state.awayShots + 1})
  }

  subtractHomeShot(){
      this.setState({ homeShots: this.state.homeShots - 1})
  }

  subtractAwayShot(){
      this.setState({ awayShots: this.state.awayShots - 1})
  }

  addHomeAssist(){
      this.setState({ homeAssists: this.state.homeAssists + 1})
  }

  addAwayAssist(){
      this.setState({ awayAssists: this.state.awayAssists + 1})
  }

  subtractHomeAssist(){
      this.setState({ homeAssists: this.state.homeAssists - 1})
  }

  subtractAwayAssist(){
      this.setState({ awayAssists: this.state.awayAssists - 1})
  }

  //send assist actions to player component



  endGame(){
    console.log('end the game')
    console.log(this.state)
    this.createGame()
    this.setState({overlay: "block"})
  }

  createGame(){
    console.log('creating game')

    const url = "https://cs2-sk-api.herokuapp.com/api/v1/games"
    fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        home_team_shots: this.state.homeShots,
        away_team_shots: this.state.awayShots,
        home_team_score: this.state.homeScore,
        away_team_score: this.state.awayScore,
          players: [
            {
            player_id: this.state.playersStats.awayGoalie.playerId,
            goals: this.state.playersStats.awayGoalie.goals,
            shots: this.state.playersStats.awayGoalie.shots,
            assists: this.state.playersStats.awayGoalie.assists,
            saves: this.state.playersStats.awayGoalie.saves},
            {
            player_id: this.state.playersStats.awayCenter.playerId,
            goals: this.state.playersStats.awayCenter.goals,
            shots: this.state.playersStats.awayCenter.shots,
            assists: this.state.playersStats.awayCenter.assists},
            {
            player_id: this.state.playersStats.awayLeftWing.playerId,
            goals: this.state.playersStats.awayLeftWing.goals,
            shots: this.state.playersStats.awayLeftWing.shots,
            assists: this.state.playersStats.awayLeftWing.assists},
            {
            player_id: this.state.playersStats.awayRightWing.playerId,
            goals: this.state.playersStats.awayRightWing.goals,
            shots: this.state.playersStats.awayRightWing.shots,
            assists: this.state.playersStats.awayRightWing.assists},
            {
            player_id: this.state.playersStats.awayLeftDefender.playerId,
            goals: this.state.playersStats.awayLeftDefender.goals,
            shots: this.state.playersStats.awayLeftDefender.shots,
            assists: this.state.playersStats.awayLeftDefender.assists},
            {
            player_id: this.state.playersStats.awayRightDefender.playerId,
            goals: this.state.playersStats.awayRightDefender.goals,
            shots: this.state.playersStats.awayRightDefender.shots,
            assists: this.state.playersStats.awayRightDefender.assists},
            {
            player_id: this.state.playersStats.homeGoalie.playerId,
            goals: this.state.playersStats.homeGoalie.goals,
            shots: this.state.playersStats.homeGoalie.shots,
            assists: this.state.playersStats.homeGoalie.assists,
            saves: this.state.playersStats.homeGoalie.saves},
            {
            player_id: this.state.playersStats.homeCenter.playerId,
            goals: this.state.playersStats.homeCenter.goals,
            shots: this.state.playersStats.homeCenter.shots,
            assists: this.state.playersStats.homeCenter.assists},
            {
            player_id: this.state.playersStats.homeLeftWing.playerId,
            goals: this.state.playersStats.homeLeftWing.goals,
            shots: this.state.playersStats.homeLeftWing.shots,
            assists: this.state.playersStats.homeLeftWing.assists},
            {
            player_id: this.state.playersStats.homeRightWing.playerId,
            goals: this.state.playersStats.homeRightWing.goals,
            shots: this.state.playersStats.homeRightWing.shots,
            assists: this.state.playersStats.homeRightWing.assists},
            {
            player_id: this.state.playersStats.homeLeftDefender.playerId,
            goals: this.state.playersStats.homeLeftDefender.goals,
            shots: this.state.playersStats.homeLeftDefender.shots,
            assists: this.state.playersStats.homeLeftDefender.assists},
            {
            player_id: this.state.playersStats.homeRightDefender.playerId,
            goals: this.state.playersStats.homeRightDefender.goals,
            shots: this.state.playersStats.homeRightDefender.shots,
            assists: this.state.playersStats.homeRightDefender.assists},
          ]
      })
    }).then(response => {
      console.log(response.data)
    })
  }

  render(){

return(
    <div >
      <StatBar homeScore={this.state.homeScore} awayScore={this.state.awayScore} homeShots={this.state.homeShots} homeAssists={this.state.homeAssists} awayShots={this.state.awayShots} endGame={this.endGame.bind(this)}/>
        <div>
          <Row middle='xs' className="Live-game" id="Live-game-box">

            <Col style={style.home.goalie} md={2}>
              <Player sendPlayerStats={this.collectPlayerStats} stateId="homeGoalie" id="Goalie" hVw="home" orientation={style.away} info={this.props.homeTeam.players} addHomeG={this.addHomeGoal.bind(this)} subtractHomeG={this.subtractHomeGoal.bind(this)} addHomeS={this.addHomeShot.bind(this)} subtractHomeS={this.subtractHomeShot.bind(this)}/>
            </Col>
            <Col style={style.home.defense} md={2}>
              <Player sendPlayerStats={this.collectPlayerStats} stateId="homeLeftDefender" id="Left Defender" hVw="home" orientation={style.home} info={this.props.homeTeam.players} addHomeG={this.addHomeGoal.bind(this)} subtractHomeG={this.subtractHomeGoal.bind(this)} addHomeS={this.addHomeShot.bind(this)} subtractHomeS={this.subtractHomeShot.bind(this)}/>
              <Player sendPlayerStats={this.collectPlayerStats} stateId="homeRightDefender" id="Right Defender" hVw="home" orientation={style.home} info={this.props.homeTeam.players} addHomeG={this.addHomeGoal.bind(this)} subtractHomeG={this.subtractHomeGoal.bind(this)} addHomeS={this.addHomeShot.bind(this)} subtractHomeS={this.subtractHomeShot.bind(this)}/>
            </Col>
            <Col style={style.home.offense} md={2}>
              <Player sendPlayerStats={this.collectPlayerStats} stateId="homeLeftWing" id="Left Wing" hVw="home" orientation={style.home} info={this.props.homeTeam.players} addHomeG={this.addHomeGoal.bind(this)} subtractHomeG={this.subtractHomeGoal.bind(this)} addHomeS={this.addHomeShot.bind(this)} subtractHomeS={this.subtractHomeShot.bind(this)}/>
              <Player sendPlayerStats={this.collectPlayerStats} stateId="homeCenter" id="Center" hVw="home" orientation={style.home} info={this.props.homeTeam.players} addHomeG={this.addHomeGoal.bind(this)} subtractHomeG={this.subtractHomeGoal.bind(this)} addHomeS={this.addHomeShot.bind(this)} subtractHomeS={this.subtractHomeShot.bind(this)}/>
              <Player sendPlayerStats={this.collectPlayerStats} stateId="homeRightWing" id="Right Wing" hVw="home" orientation={style.home} info={this.props.homeTeam.players} addHomeG={this.addHomeGoal.bind(this)} subtractHomeG={this.subtractHomeGoal.bind(this)} addHomeS={this.addHomeShot.bind(this)} subtractHomeS={this.subtractHomeShot.bind(this)}/>
            </Col>
            <Col style={style.away.offense} md={2}>
              <Player sendPlayerStats={this.collectPlayerStats} stateId="awayRightWing" id="Right Wing" hVw="away" orientation={style.away} info={this.props.awayTeam.players} addAwayG={this.addAwayGoal.bind(this)} subtractAwayG={this.subtractAwayGoal.bind(this)} addAwayS={this.addAwayShot.bind(this)} subtractAwayS={this.subtractAwayShot.bind(this)}/>
              <Player sendPlayerStats={this.collectPlayerStats} stateId="awayCenter" id="Center" hVw="away" orientation={style.away} info={this.props.awayTeam.players} addAwayG={this.addAwayGoal.bind(this)} subtractAwayG={this.subtractAwayGoal.bind(this)} addAwayS={this.addAwayShot.bind(this)} subtractAwayS={this.subtractAwayShot.bind(this)}/>
              <Player sendPlayerStats={this.collectPlayerStats} stateId="awayLeftWing" id="Left Wing" hVw="away" orientation={style.away} info={this.props.awayTeam.players} addAwayG={this.addAwayGoal.bind(this)} subtractAwayG={this.subtractAwayGoal.bind(this)} addAwayS={this.addAwayShot.bind(this)} subtractAwayS={this.subtractAwayShot.bind(this)}/>
            </Col>
            <Col style={style.away.defense} md={2}>
              <Player sendPlayerStats={this.collectPlayerStats} stateId="awayRightDefender" id="Right Defender" hVw="away" orientation={style.away} info={this.props.awayTeam.players} addAwayG={this.addAwayGoal.bind(this)} subtractAwayG={this.subtractAwayGoal.bind(this)} addAwayS={this.addAwayShot.bind(this)} subtractAwayS={this.subtractAwayShot.bind(this)}/>
              <Player sendPlayerStats={this.collectPlayerStats} stateId="awayLeftDefender" id="Left Defender" hVw="away" orientation={style.away} info={this.props.awayTeam.players} addAwayG={this.addAwayGoal.bind(this)} subtractAwayG={this.subtractAwayGoal.bind(this)} addAwayS={this.addAwayShot.bind(this)} subtractAwayS={this.subtractAwayShot.bind(this)}/>
            </Col>
            <Col style={style.away.goalie} md={2}>
              <Player sendPlayerStats={this.collectPlayerStats} stateId="awayGoalie" id="Goalie" hVw="away" orientation={style.home} info={this.props.awayTeam.players} addAwayG={this.addAwayGoal.bind(this)} subtractAwayG={this.subtractAwayGoal.bind(this)} addAwayS={this.addAwayShot.bind(this)} subtractAwayS={this.subtractAwayShot.bind(this)}/>
            </Col>

          </Row>
          <Button id="end_game_button"  color="green" type="submit" size="massive" onClick={this.endGame.bind(this)} >
           End Game/Update Stats
          </Button>
        </div>
        <div style={{display: this.state.overlay}}className="stat-display"><GameStatsContainer players={this.state.playersStats} /></div>
    </div>
   )

  }
}

const style = {
  home: {
    width: 150,
    height: 150,
    marginTop: 30,
    goalie: {
      paddingLeft: 100,
      paddingTop: 150,
      zoom: 0.8
    },
    defense: {
      paddingRight: 50,
      paddingTop: 150
    },
    offense: {
      paddingLeft: 50,
      paddingTop: 150
    }
  },
  away: {
    width: 150,
    height: 150,
    marginTop: 30,
    filter: "FlipH",
    transform: "scaleX(-1)",
    goalie: {
      paddingLeft: 50,
      paddingTop: 150,
      zoom: 0.8
    },
    defense: {
      paddingLeft: 50,
      paddingTop: 150
    },
    offense: {
      paddingLeft: 50,
      paddingTop: 150
    }
  },
  button: {
    marginTop: 100
  }

}
export default withRouter(LiveGameContainer)
