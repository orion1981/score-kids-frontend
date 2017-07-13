import React from 'react'
import TeamSelect from '../components/TeamSelect'
import GameSelector from '../components/GameSelector'
import { Row, Col} from 'react-flexbox-grid'
import {  } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import LiveGameContainer from '../containers/LiveGameContainer'
import { Container, Button, Segment, Card, Image, Icon } from 'semantic-ui-react'

export default class GameSetupContainer extends React.Component {
  constructor(props){
    super(props)

    this.state = {

      teams:[],
      gameLocation: "",
      gameDuration: "",
      gameDate: ""
    }

    this.submitHandler = this.submitHandler.bind(this)
  }

componentDidMount(){
    fetch('http://localhost:3000/api/v1/teams')
            .then(res => res.json())
            .then(data => this.setState({teams: data}))

    }

 submitHandler(e){
   e.preventDefault()
   console.log(e,"submitHandler")

 }

 handleHomeChange(e, value) {
   console.log(' home team pick',value, e)
   this.props.setHome(value.value)
 }

 handleAwayChange(e, value) {
   console.log(' away team pick',value, e)
  this.props.setAway(value.value)
 }

  render(){
    console.log(this.state)
    return(
      <div id="setup_container">

        <Route path="/Live" render={() =><LiveGameContainer/>}/>

            <form onSubmit={ e => this.submitHandler(e)}>
              <div className="setup-page">
              <Container>
                <h1>Choose teams for matchup! </h1>
                  <Row middle='xs'>
                      <Col md={6}><h1>Home Team</h1></Col>
                      <Col md={6}><h1>Away Team</h1></Col>
                  </Row>
                  <Row middle='xs'>

                      <Col md={6}><TeamSelect teams={this.state.teams}  handleChange={this.handleHomeChange.bind(this)} /></Col>

                      <Col md={6}><TeamSelect teams={this.state.teams}  handleChange={this.handleAwayChange.bind(this)} /></Col>

                  </Row>
                  
                </Container>
                <Container>

                <br/>
                  <Link to="/Live" ><Button fluid="true" size="massive" className="ui primary button" type="submit" value="submit" >Start Game</Button></Link>
                </Container>
              </div>
            </form>

          </div>

   )
  }
}
