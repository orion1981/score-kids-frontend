import React from 'react'
import axios from 'axios'
import { Form, Icon, Input, Container, Header} from 'semantic-ui-react'
import {withRouter} from 'react-router-dom'
import { Row, Col } from 'react-flexbox-grid'

 class NewTeamForm extends React.Component {
  constructor(){
    super()

    this.state = {
      teamName: "",
      mascot: "",
      location: "",
      centerName: "",
      centerNumber: "",
      leftWingName: "",
      leftWingNumber: "",
      rightWingName: "",
      rightWingNumber: "",
      leftDefenseName: "",
      leftDefenseNumber: "",
      rightDefenseName:"",
      rightDefenseNumber:"",
      goalieName: "",
      goalieNumber: "",
    }
    this.handleSubmit = this.handleSubmit.bind(this)
      this.createTeam = this.createTeam.bind(this)
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
    console.log(e.target.value)
  }

  handleSubmit(e){
    e.preventDefault()
    console.log("submit new team")
    this.createTeam()

   }

  createTeam(){
    const url = "http://localhost:3000/api/v1/teams"
    fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: this.state.teamName,
        mascot: this.state.mascot,
        location: this.state.location,
        players: [
          {
          position: "Center",
          name: this.state.centerName,
          player_number: this.state.centerNumber},
          {
          position: "Left Wing",
          name: this.state.leftWingName,
          player_number: this.state.leftWingNumber},
          {
          position: "Right Wing",
          name: this.state.rightWingName,
          player_number: this.state.rightWingNumber},
          {
          position: "Left Defender",
          name: this.state.leftDefenderName,
          player_number: this.state.leftDefenderNumber},
          {
          position: "Right Defender",
          name: this.state.rightDefenderName,
          player_number: this.state.rightDefenderNumber},
          {
          position: "Goalie",
          name: this.state.goalieName,
          player_number: this.state.goalieNumber},

        ]

      })
    }).then(response => {
      console.log(response.data)
    }).then(this.props.history.push('/SetUp'))
  }

  render(){
    return(

      <Form className="ui form" onSubmit={this.handleSubmit}>
        <div className="new-team">

              <Container>
                <h1>Create New Team</h1>
                  <div className="six wide field">
                     <label>Team Name</label>
                     <input type="text" value={this.state.teamName} name="teamName" placeholder="Team name.." onChange={this.handleChange.bind(this)}/>
                  </div>
                  <div className="six wide field">
                     <label>Mascot</label>
                     <input type="text" value={this.state.mascot} name="mascot" placeholder="Mascot.." onChange={this.handleChange.bind(this)}/>
                    </div>
                  <div className="six wide field">
                      <label>Location</label>
                      <input type="text" value={this.state.location} name="location" placeholder="Location.." onChange={this.handleChange.bind(this)}/>
                  </div>
              </Container>
              <Row>
                <Container>
                  <Col md={10}>
                    <h1>Players</h1>
                    <div className='two fields'>
                      <div className="four wide field">
                          <label>Goalie:</label>
                          <Input icon="user" iconPosition='left' type="text" value={this.state.goalieName} name="goalieName" placeholder="player name...."  onChange={this.handleChange.bind(this)}/>
                      </div>
                      <div className="four wide field">
                        <label>Goalie #:</label>
                        <Input icon="hashtag" iconPosition='left' type="text" value={this.state.goalieNumber} name="goalieNumber" placeholder="Jersey #"  onChange={this.handleChange.bind(this)}/>
                      </div>
                    </div>
                    <div className='two fields'>
                      <div className="four wide field">
                          <label>Center:</label>
                          <Input icon="user" iconPosition='left' type="text" value={this.state.centerName} name="centerName" placeholder="player name...." onChange={this.handleChange.bind(this)}/>
                      </div>
                      <div className="four wide field">
                        <label>Center #:</label>
                        <Input icon="hashtag" iconPosition='left' type="text" value={this.state.centerNumber} name="centerNumber" placeholder="Jersey #" onChange={this.handleChange.bind(this)}/>
                      </div>
                    </div>
                    <div className='two fields'>
                      <div className="four wide field">
                          <label>Left Winger:</label>
                          <Input icon="user" iconPosition='left' type="text" value={this.state.leftWingName} name="leftWingName" placeholder="player name...." onChange={this.handleChange.bind(this)}/>
                      </div>
                      <div className="four wide field">
                        <label>Left Winger #:</label>
                        <Input icon="hashtag" iconPosition='left' type="text" value={this.state.leftWingNumber} name="leftWingNumber" placeholder="Jersey #" onChange={this.handleChange.bind(this)}/>
                      </div>
                    </div>
                    <div className='two fields'>
                      <div className="four wide field">
                          <label>Right Winger:</label>
                          <Input icon="user" iconPosition='left' type="text" value={this.state.rightWingName} name="rightWingName" placeholder="player name...." onChange={this.handleChange.bind(this)}/>
                      </div>
                      <div className="four wide field">
                        <label>Right Winger #:</label>
                        <Input icon="hashtag" iconPosition='left' type="text" value={this.state.rightWingNumber} name="rightWingNumber" placeholder="Jersey #" onChange={this.handleChange.bind(this)}/>
                      </div>
                    </div>
                    <div className='two fields'>
                      <div className="four wide field">
                          <label>Left Defense:</label>
                          <Input icon="user" iconPosition='left' type="text" value={this.state.leftDefenderName} name="leftDefenderName" placeholder="player name...." onChange={this.handleChange.bind(this)}/>
                      </div>
                      <div className="four wide field">
                        <label>Left Defense #:</label>
                        <Input icon="hashtag" iconPosition='left' type="text" value={this.state.leftDefenderNumber} name="leftDefenderNumber" placeholder="Jersey #" onChange={this.handleChange.bind(this)}/>
                      </div>
                    </div>
                    <div className='two fields'>
                      <div className="four wide field">
                          <label>Right Defense:</label>
                          <Input icon="user" iconPosition='left' type="text" value={this.state.rightDefenderName} name="rightDefenderName" placeholder="player name...." onChange={this.handleChange.bind(this)}/>
                      </div>
                      <div className="four wide field">
                        <label>Right Defense #:</label>
                        <Input icon="hashtag" iconPosition='left' type="text" value={this.state.rightDefenderNumber} name="rightDefenderNumber" placeholder="Jersey #" onChange={this.handleChange.bind(this)}/>
                      </div>
                    </div>
                    <button className="ui primary button" type="submit">Submit</button>
                    </Col>
                    <Col md={2}>
                      <img  style={style.playerImg} src="http://www.poweredgehockey.com/wp-content/uploads/2010/12/players_02-05-260x250.png"/>
                    </Col>
                  </Container>

                  </Row>

          </div>
      </Form>
    )
  }
}

const style={
  playerImg:{
    position: "relative",
    left: "-400px",
    height: 550,
    width: 700

  }
}

export default withRouter(NewTeamForm)



// <div className="ui checkbox">
// <input type="checkbox" tabindex="0" className="hidden"/>
// <label>I agree to the Terms and Conditions</label>
// </div>
