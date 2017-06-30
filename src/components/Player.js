import React from 'react'
import { Panel, Button, Glyphicon } from 'react-bootstrap'
import { Row, Col } from 'react-flexbox-grid'

export default class Player extends React.Component  {
  constructor(props){
    super(props)

    this.state = {
      isNoteCard: false
    }

  }

  handleClick(){
    console.log('handleClick')
    this.state.isNoteCard ? this.setState({isNoteCard: false}) : this.setState({isNoteCard: true})
    console.log(this.state)
  }

  statCard(){
    return(
      <Panel>
      <Row middle="xs">
        <Col md={9}><h3>Stat Card</h3></Col>
        <Col md={2}>
          <Button onClick={this.handleClick.bind(this)}bsStyle="danger">X</Button>
        </Col>
      </Row>
        <Row><Col md={9}><Button bsStyle="primary">+Goal</Button>  <Button bsStyle="warning">-Goal</Button></Col><Col md={2}><h4 className="card-stat">1</h4></Col></Row>
        <Row><Col md={9}><Button bsStyle="primary">+Shot</Button>  <Button bsStyle="warning">-Shot</Button></Col><Col md={2}><h4 className="card-stat">4</h4></Col></Row>
        <Row><Col md={9}><Button bsStyle="primary">Assist</Button>  <Button bsStyle="warning">Assist</Button></Col><Col md={1}><h4 className="card-stat">2</h4></Col></Row>
      </Panel>
    )
  }
  playerImage(){
    return(
      <Row>
        <div>
          <img onClick={this.handleClick.bind(this)} style={this.props.orientation} src="https://userscontent2.emaze.com/images/ca4cecf5-8daf-49fa-93dd-02cd2958d2af/89c38a2288e09204c53fb13fdf1a082a.png"/>
          <Panel style={playerName}><Glyphicon glyph="user"/>   &nbsp; The Player</Panel>
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
