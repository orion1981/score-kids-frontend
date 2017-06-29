import React from 'react'
import StatBar from '../components/StatBar'
import Player from '../components/Player'
import {Grid, Row, Col} from 'react-flexbox-grid'


export default class LiveGameContainer extends React.Component {
  constructor(props){
    super(props)

    this.state ={

      homeScore: 0,
      awayScore: 0,
      homeShots: 0,
      awayShots: 0,   }

  }

  render(){
    return(
    <div className="Live-game">
      <StatBar homeScore={this.state.homeScore} awayScore={this.state.awayScore} homeShots={this.state.homeShots} awayShots={this.state.awayShots}/>
        <Row middle='xs'>
          <Col md={2}>
            <Player orientation={style.home}/>
          </Col>
          <Col md={2}>
            <Player orientation={style.home}/>
            <Player orientation={style.home}/>
          </Col>
          <Col md={2}>
            <Player orientation={style.home}/>
            <Player orientation={style.home}/>
            <Player orientation={style.home}/>
          </Col>
          <Col md={2}>
            <Player orientation={style.away}/>
            <Player orientation={style.away}/>
            <Player orientation={style.away}/>
          </Col>
          <Col md={2}>
            <Player orientation={style.away}/>
            <Player orientation={style.away}/>
          </Col>
          <Col md={2}>
            <Player orientation={style.away}/>
          </Col>
        </Row>
    </div>
   )
  }
}

const style = {
  home: {
    width: 150,
    height: 150,
    marginTop: 50
  },
  away: {
    width: 150,
    height: 150,
    marginTop: 50,
    filter: "FlipH",
    transform: "scaleX(-1)"
  }
}
