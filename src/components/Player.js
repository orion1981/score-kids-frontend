import React from 'react'
import { Panel, Button, Glyphicon } from 'react-bootstrap'
import { Row, Col } from 'react-flexbox-grid'

export default class Player extends React.Component  {
  constructor(props){
    super(props)

    this.state = {
      player: {},
      shots: 0,
      assists: 0,
      goals: 0,
      isNoteCard: false
    }
    this.addStat = this.addStat.bind(this)
    this.subtractStat = this.subtractStat.bind(this)
    // this.playerPosition = this.playerPosition.bind(this)
  }

  handleClick(){
    console.log('handleClick')
    this.state.isNoteCard ? this.setState({isNoteCard: false}) : this.setState({isNoteCard: true})
    console.log(this.state)
  }

  addStat(e){
    console.log("1 up!")
    let value = e.target.id
    this.setState({ [value]: this.state[value] + 1})
      this.addStatsLive(e)
  }

  addStatsLive(e){
    let value = e.target.id
    if (value === "goals")
      {this.props.hVw === "home" ? this.props.addHomeG() : this.props.addAwayG(),
      this.props.hVw === "home" ? this.props.addHomeS()  : this.props.addAwayS(),
      this.setState({ shots: this.state.shots + 1})}
    else if (value === "shots")
      {this.props.hVw === "home" ? this.props.addHomeS() : this.props.addAwayS()}
  }

  subtractStat(e){
    console.log("Take me Away!")
    let value = e.target.id
    this.subtractStatsLive(e)
    var notNegative = this.state[value] === 0 ? 0 : this.state[value] - 1
    this.setState({ [value]: notNegative})
  }

 subtractStatsLive(e){
   let value = e.target.id
    if (value === "goals")
      {this.state[value] > 0 ? (this.props.hVw === "home" ? this.props.subtractHomeG() : this.props.subtractAwayG()) : null}
      else if (value === "shots")
      {this.state[value] > 0 ? (this.props.hVw === "home" ? this.props.subtractHomeS() : this.props.subtractAwayS()) : null}
  }

  playerPosition(position){
    return this.props.info.find(player =>{
      return (player.position === position )

    })
  console.log("called upon")
  }

    componentWillMount(){
        console.log("will mount")
      var playerInfo = this.playerPosition(this.props.id)
        console.log("player will change")
      this.setState({ player: playerInfo})
        console.log("player did change")

    }

    componentDidMount(){
      console.log('did mount')
    }

  statCard(){
    console.log(this.props)
    return(
      <Panel>
      <Row><h1>{this.state.player.name}'s</h1></Row>
      <Row middle="xs">
        <Col md={9}><h3>Stat Card</h3></Col>
        <Col md={2}>
          <Button onClick={this.handleClick.bind(this)}bsStyle="danger">X</Button>
        </Col>
      </Row>
        <Row><Col md={9}><Button id="goals" bsStyle="primary" onClick={this.addStat}>+Goal</Button>  <Button id="goals" bsStyle="warning" onClick={this.subtractStat}>-Goal</Button></Col><Col md={2}><h4 className="goal-stat">{this.state.goals}</h4></Col></Row>
        <Row><Col md={9}><Button id="shots" bsStyle="primary" onClick={this.addStat}>+Shot</Button>  <Button id="shots" bsStyle="warning" onClick={this.subtractStat}>-Shot</Button></Col><Col md={2}><h4 className="shot-stat">{this.state.shots}</h4></Col></Row>
        <Row><Col md={9}><Button id="assists" bsStyle="primary" onClick={this.addStat}>Assist</Button>  <Button id="assists" bsStyle="warning" onClick={this.subtractStat}>Assist</Button></Col><Col md={1}><h4 className="assist-stat">{this.state.assists}</h4></Col></Row>
      </Panel>
    )
  }

  // glyphDirection(){
  //   if (this.props.hVw === "home")
  //   return "arrow-right"
  //   else
  //   return "left-arrow"
  // }

  playerImage(){
    return(
      <Row>
        <div>
          <img onClick={this.handleClick.bind(this)} style={this.props.orientation} src="https://userscontent2.emaze.com/images/ca4cecf5-8daf-49fa-93dd-02cd2958d2af/89c38a2288e09204c53fb13fdf1a082a.png"/>
          {this.props.hVw === "home" ? <Panel style={playerName}>#{this.state.player.player_number} {this.state.player.name}    &nbsp;<Glyphicon glyph="arrow-right"/></Panel> : <Panel style={playerName}><Glyphicon glyph="arrow-left"/>   &nbsp; {this.state.player.name} #{this.state.player.player_number}</Panel>}
        </div>
      </Row>
    )
  }

  render(){
    return(
      <div>
        { this.state.isNoteCard ? this.statCard() : this.playerImage() }
      </div>
    )
  }
}

const playerName = {
  marginRight: 15,
  marginLeft: 15
}

// const playerStyle = {
//   backgroundImage: url(""),
//   backgroundRepeat: noRepeat,
//   minWidth: 100,
//   minHeight: 400,
//   width: 50,
//   height: 50
// }
