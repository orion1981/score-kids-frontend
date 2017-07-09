import React from 'react'
import StatBar from '../components/StatBar'
import Player from '../components/Player'
import { Row, Col} from 'react-flexbox-grid'


export default class LiveGameContainer extends React.Component {
  constructor(props){
    super(props)

    this.state ={

      homeScore: 0,
      awayScore: 0,
      homeShots: 0,
      awayShots: 0,   }

      console.log(props)

  }

  clickScore

  componentDidMount(){
    console.log("mountin",this.props);

  }
  componentWillReceiveProps(nextProps){
    console.log("new props",nextProps);
  }
  componentWillUpdate(){
    console.log("updating", this.props);
  }

  addHomeGoal(){
      this.setState({ homeScore: this.state.homeScore + 1})
      console.log("parent goal")
  }

  addAwayGoal(){
      this.setState({ awayScore: this.state.awayScore + 1})
      console.log("parent goal")
  }

  subtractHomeGoal(){
      this.setState({ homeScore: this.state.homeScore - 1})
  }

  subtractAwayGoal(){
      this.setState({ awayScore: this.state.awayScore - 1})
  }

  addHomeShot(){
      this.setState({ homeShots: this.state.homeShots + 1})
      console.log("parent goal")
  }

  addAwayShot(){
      this.setState({ awayShots: this.state.awayShots + 1})
      console.log("parent goal")
  }

  subtractHomeShot(){
      this.setState({ homeShots: this.state.homeShots - 1})
  }

  subtractAwayShot(){
      this.setState({ awayShots: this.state.awayShots - 1})
  }


  render(){

return(
    <div >
      <StatBar homeScore={this.state.homeScore} awayScore={this.state.awayScore} homeShots={this.state.homeShots} awayShots={this.state.awayShots}/>

        <div className="Live-game">
          <Row middle='xs'>

            <Col style={style.home.goalie} md={2}>
              <Player id="Goalie" hVw="home" orientation={style.home} info={this.props.homeTeam.value.players} addHomeG={this.addHomeGoal.bind(this)} subtractHomeG={this.subtractHomeGoal.bind(this)} addHomeS={this.addHomeShot.bind(this)} subtractHomeS={this.subtractHomeShot.bind(this)}/>
            </Col>
            <Col style={style.home.defense} md={2}>
              <Player id="Left Defender" hVw="home" orientation={style.home} info={this.props.homeTeam.value.players} addHomeG={this.addHomeGoal.bind(this)} subtractHomeG={this.subtractHomeGoal.bind(this)} addHomeS={this.addHomeShot.bind(this)} subtractHomeS={this.subtractHomeShot.bind(this)}/>
              <Player id="Right Defender" hVw="home" orientation={style.home} info={this.props.homeTeam.value.players} addHomeG={this.addHomeGoal.bind(this)} subtractHomeG={this.subtractHomeGoal.bind(this)} addHomeS={this.addHomeShot.bind(this)} subtractHomeS={this.subtractHomeShot.bind(this)}/>
            </Col>
            <Col style={style.home.offense} md={2}>
              <Player id="Left Wing" hVw="home" orientation={style.home} info={this.props.homeTeam.value.players} addHomeG={this.addHomeGoal.bind(this)} subtractHomeG={this.subtractHomeGoal.bind(this)} addHomeS={this.addHomeShot.bind(this)} subtractHomeS={this.subtractHomeShot.bind(this)}/>
              <Player id="Center" hVw="home" orientation={style.home} info={this.props.homeTeam.value.players} addHomeG={this.addHomeGoal.bind(this)} subtractHomeG={this.subtractHomeGoal.bind(this)} addHomeS={this.addHomeShot.bind(this)} subtractHomeS={this.subtractHomeShot.bind(this)}/>
              <Player id="Right Wing" hVw="home" orientation={style.home} info={this.props.homeTeam.value.players} addHomeG={this.addHomeGoal.bind(this)} subtractHomeG={this.subtractHomeGoal.bind(this)} addHomeS={this.addHomeShot.bind(this)} subtractHomeS={this.subtractHomeShot.bind(this)}/>
            </Col>
            <Col style={style.away.offense} md={2}>
              <Player id="Right Wing" hVw="away" orientation={style.away} info={this.props.awayTeam.value.players} addAwayG={this.addAwayGoal.bind(this)} subtractAwayG={this.subtractAwayGoal.bind(this)} addAwayS={this.addAwayShot.bind(this)} subtractAwayS={this.subtractAwayShot.bind(this)}/>
              <Player id="Center" hVw="away" orientation={style.away} info={this.props.awayTeam.value.players} addAwayG={this.addAwayGoal.bind(this)} subtractAwayG={this.subtractAwayGoal.bind(this)} addAwayS={this.addAwayShot.bind(this)} subtractAwayS={this.subtractAwayShot.bind(this)}/>
              <Player id="Left Wing" hVw="away" orientation={style.away} info={this.props.awayTeam.value.players} addAwayG={this.addAwayGoal.bind(this)} subtractAwayG={this.subtractAwayGoal.bind(this)} addAwayS={this.addAwayShot.bind(this)} subtractAwayS={this.subtractAwayShot.bind(this)}/>
            </Col>
            <Col style={style.away.defense} md={2}>
              <Player id="Right Defender" hVw="away" orientation={style.away} info={this.props.awayTeam.value.players} addAwayG={this.addAwayGoal.bind(this)} subtractAwayG={this.subtractAwayGoal.bind(this)} addAwayS={this.addAwayShot.bind(this)} subtractAwayS={this.subtractAwayShot.bind(this)}/>
              <Player id="Left Defender" hVw="away" orientation={style.away} info={this.props.awayTeam.value.players} addAwayG={this.addAwayGoal.bind(this)} subtractAwayG={this.subtractAwayGoal.bind(this)} addAwayS={this.addAwayShot.bind(this)} subtractAwayS={this.subtractAwayShot.bind(this)}/>
            </Col>
            <Col style={style.away.goalie} md={2}>
              <Player id="Goalie" hVw="away" orientation={style.away} info={this.props.awayTeam.value.players} addAwayG={this.addAwayGoal.bind(this)} subtractAwayG={this.subtractAwayGoal.bind(this)} addAwayS={this.addAwayShot.bind(this)} subtractAwayS={this.subtractAwayShot.bind(this)}/>
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

}
