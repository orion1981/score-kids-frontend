import React from 'react'
import StatBar from '../components/StatBar'
import Player from '../components/Player'
import { Button } from 'semantic-ui-react'
import { Row, Col} from 'react-flexbox-grid'


export default class LiveGameContainer extends React.Component {
  constructor(props){
    super(props)

    this.state ={

      homeScore: 0,
      awayScore: 0,
      homeShots: 0,
      awayShots: 0,
      homeTeamStats: [],
      playersStats: {
        awayGoalie:{
          goals: 0,
          shots: 0,
          assists: 0
        },
        awayCenter:{
          goals: 0,
          shots: 0,
          assists: 0
        },
        awayLeftWing:{
          goals: 0,
          shots: 0,
          assists: 0
        },
        awayRightWing:{
          goals: 0,
          shots: 0,
          assists: 0
        },
        awayLeftDefender:{
          goals: 0,
          shots: 0,
          assists: 0
        },
        awayRightDefender:{
          goals: 0,
          shots: 0,
          assists: 0
        },
        homeGoalie:{
          goals: 0,
          shots: 0,
          assists: 0
        },
        homeCenter:{
          goals: 0,
          shots: 0,
          assists: 0
        },
        homeLeftWing:{
          goals: 0,
          shots: 0,
          assists: 0
        },
        homeRightWing:{
          goals: 0,
          shots: 0,
          assists: 0
        },
        homeLeftDefender:{
          goals: 0,
          shots: 0,
          assists: 0
        },
        homeRightDefender:{
          goals: 0,
          shots: 0,
          assists: 0
        },

      }
      // awayTeamStats: [
      //             {awayGoalie:{
      //                   goals: 0,
      //                   shots: 0,
      //                   assists: 0
      //                 }},
      //                 ]
    }

      console.log(props)
      this.createGame = this.createGame.bind(this)
      this.collectPlayerStats = this.collectPlayerStats.bind(this)
  }





  collectPlayerStats(playerStatObj) {
    console.log(playerStatObj)

    //let prevPlayerStat = {playersStats:{[playerStatObj.role]:[playerStatObj.stat][0]}}
    let individualStats = Object.assign({},this.state.playersStats[playerStatObj.role],{[playerStatObj.stat]:[playerStatObj.value][0]})
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

  // collectPlayerGameStats(){
  //   console.log("create stats")
  // }

  endGame(){
    console.log('end the game')
    console.log(this.state)
    this.createGame()

    // this.createGame()
    // .then( res =>  )
  }

  createGame(){
    console.log('creating game')
    // const url = "http://localhost:3000/api/v1/games"
    // fetch(url, {
    //   method: 'POST',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //
    //   })
    // })
  }


  render(){

return(
    <div >
      <StatBar homeScore={this.state.homeScore} awayScore={this.state.awayScore} homeShots={this.state.homeShots} awayShots={this.state.awayShots} endGame={this.endGame.bind(this)}/>
        <div className="Live-game">
          <Row middle='xs'>

            <Col style={style.home.goalie} md={2}>
              <Player sendPlayerStats={this.collectPlayerStats} stateId="homeGoalie" id="Goalie" hVw="home" orientation={style.home} info={this.props.homeTeam.players} addHomeG={this.addHomeGoal.bind(this)} subtractHomeG={this.subtractHomeGoal.bind(this)} addHomeS={this.addHomeShot.bind(this)} subtractHomeS={this.subtractHomeShot.bind(this)}/>
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
              <Player sendPlayerStats={this.collectPlayerStats} stateId="awayGoalie" id="Goalie" hVw="away" orientation={style.away} info={this.props.awayTeam.players} addAwayG={this.addAwayGoal.bind(this)} subtractAwayG={this.subtractAwayGoal.bind(this)} addAwayS={this.addAwayShot.bind(this)} subtractAwayS={this.subtractAwayShot.bind(this)}/>
              <button className="ui primary button" type="submit" onClick={this.endGame.bind(this)} >
               End Game/Update Stats
              </button>
            </Col>

          </Row>
        </div>
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
      paddingLeft: 50,
      paddingTop: 150
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
  away: {
    width: 150,
    height: 150,
    marginTop: 30,
    filter: "FlipH",
    transform: "scaleX(-1)",
    goalie: {
      paddingRight: 50,
      paddingTop: 150
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
