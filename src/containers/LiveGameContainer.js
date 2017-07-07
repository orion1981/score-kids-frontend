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

  playerPositionHome(position){
    return this.props.homeTeam.value.players[0]
  }

  componentDidMount(){
    console.log("mountin",this.props);
    this.playerPositionHome()
  }
  componentWillReceiveProps(nextProps){
    console.log("new props",nextProps);
  }
  componentWillUpdate(){
    console.log("updating", this.props);
  }



  render(){
return(
    <div >
      <StatBar homeScore={this.state.homeScore} awayScore={this.state.awayScore} homeShots={this.state.homeShots} awayShots={this.state.awayShots}/>

        <div className="Live-game">
          <Row middle='xs'>

            <Col style={style.home.goalie} md={2}>
              <Player id="goalie" orientation={style.home} info={this.playerPositionHome.bind(this)} />
            </Col>
            <Col style={style.home.defense} md={2}>
              <Player orientation={style.home}/>
              <Player orientation={style.home}/>
            </Col>
            <Col style={style.home.offense} md={2}>
              <Player orientation={style.home}/>
              <Player orientation={style.home}/>
              <Player orientation={style.home}/>
            </Col>
            <Col style={style.away.offense} md={2}>
              <Player orientation={style.away}/>
              <Player orientation={style.away}/>
              <Player orientation={style.away}/>
            </Col>
            <Col style={style.away.defense} md={2}>
              <Player orientation={style.away}/>
              <Player orientation={style.away}/>
            </Col>
            <Col style={style.away.goalie} md={2}>
              <Player orientation={style.away}/>
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
