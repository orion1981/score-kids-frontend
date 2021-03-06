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
      saves: 0,
      isNoteCard: false
    }
    this.addStat = this.addStat.bind(this)
    this.subtractStat = this.subtractStat.bind(this)
    this.playerImage= this.playerImage.bind(this)
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
    this.props.sendPlayerStats({
      role: this.props.stateId,
      stat:[value],
      value:this.state[value] + 1
    })
    this.setState({ [value]: this.state[value] + 1})
    this.addStatsLive(e)
  }

  addStatsLive(e){
    console.log("live Stats up")
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
      var notNegative = this.state[value] === 0 ? 0 : this.state[value] - 1
      this.props.sendPlayerStats({
        role:this.props.stateId,
        stat: value,
        value: notNegative
      })
    this.subtractStatsLive(e)
    this.setState({ [value]: notNegative})

  }

 subtractStatsLive(e){
   let value = e.target.id
    if (value === "goals")
      {this.state[value] > 0 ? (this.props.hVw === "home" ? this.props.subtractHomeG() : this.props.subtractAwayG()) : 0}
      else if (value === "shots")
      {this.state[value] > 0 ? (this.props.hVw === "home" ? this.props.subtractHomeS() : this.props.subtractAwayS()) : 0}
  }

  playerPosition(position){
    return this.props.info.find(player =>{
      return (player.position === position )

    })
  console.log("called upon")
  }

    componentWillMount(){

      var playerInfo = this.playerPosition(this.props.id)
      this.setState({ player: playerInfo})

    }



  statCard(){
    console.log(this.props)
    if (this.props.id === "Goalie"){
      return(
        <Panel>
        <Row><h1>{this.state.player.name}</h1></Row>
        <Row middle="xs">
          <Col md={9}><h3>Stat Card</h3></Col>
          <Col md={2}>
            <Button onClick={this.handleClick.bind(this)}bsStyle="danger">X</Button>
          </Col>
        </Row>
          <Row><Col md={9}><Button id="saves" bsStyle="primary" onClick={this.addStat}>+Save</Button>  <Button id="saves" bsStyle="warning" onClick={this.subtractStat}>-Save</Button></Col><Col md={2}><h4 className="save-stat">{this.state.saves}</h4></Col></Row>
          <Row><Col md={9}><Button id="assists" bsStyle="primary" onClick={this.addStat}>Assist</Button>  <Button id="assists" bsStyle="warning" onClick={this.subtractStat}>Assist</Button></Col><Col md={1}><h4 className="assist-stat">{this.state.assists}</h4></Col></Row>
        </Panel>
      )
    }else{
    return(
      <Panel>
      <Row><h1>{this.state.player.name}</h1></Row>
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
}

  // glyphDirection(){
  //   if (this.props.hVw === "home")
  //   return "arrow-right"
  //   else
  //   return "left-arrow"
  // }

  playerImage(){

    if (this.state.player) {
      const playerUrl= "https://userscontent2.emaze.com/images/ca4cecf5-8daf-49fa-93dd-02cd2958d2af/89c38a2288e09204c53fb13fdf1a082a.png"
      const goalieUrl= "http://image.spreadshirtmedia.com/image-server/v1/designs/11834194,width=200,height=200"
      const iceImage= this.props.id === "Goalie" ? goalieUrl : playerUrl
      return(
        <Row>
          <div>
            <img onClick={this.handleClick.bind(this)} style={this.props.orientation} src={iceImage}/>
            {this.props.hVw === "home" ? <Panel style={playerName}>#{this.state.player.player_number} {this.state.player.name}    &nbsp;<Glyphicon glyph="arrow-right"/></Panel> : <Panel style={playerName}><Glyphicon glyph="arrow-left"/>   &nbsp; {this.state.player.name} #{this.state.player.player_number}</Panel>}
          </div>
        </Row>
      )
    } else {
      return null
    }
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
