import React from 'react'
import { Button, Segment, Grid } from 'semantic-ui-react'
import { withRouter, Link } from 'react-router-dom'

class GameStatsContainer extends React.Component {
  constructor(props){
    super(props)

    this.state ={
      allPlayerStats: [],
    }

  }


    componentDidMount(){
        fetch('http://lcs2-sk-api.herokuapp.com/api/v1/player_games')
                .then(res => res.json())
                .then(data => this.setState({allPlayerStats: data}))
      }


  render(props){

    return(
    <div>
      <h1>Box Score</h1>
       <Grid columns='equal'>
        <Grid.Row>

              <Grid.Column>
                <Segment color="blue" className="Home-stats"><h2>Home Stats</h2></Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment color="red" className="Home-stats"><h2>Away Stats</h2></Segment>
              </Grid.Column>
        </Grid.Row>
        <Grid.Row>
              <Grid.Column>
                <Segment color="blue" className="Home-stats"><h3>LW: {this.props.players.homeLeftWing.playerName} &nbsp; &nbsp; &nbsp; &nbsp;|&nbsp; goals:{this.props.players.homeLeftWing.goals} &nbsp;|&nbsp; shots:{this.props.players.homeLeftWing.shots} &nbsp;|&nbsp; assists:{this.props.players.homeLeftWing.assists}  </h3></Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment color="red" className="Home-stats"><h3>LW: {this.props.players.awayLeftWing.playerName} &nbsp; &nbsp; &nbsp; &nbsp;|&nbsp; goals:{this.props.players.awayLeftWing.goals} &nbsp;|&nbsp; shots:{this.props.players.awayLeftWing.shots} &nbsp;|&nbsp; assists:{this.props.players.awayLeftWing.assists}  </h3></Segment>
              </Grid.Column>
        </Grid.Row>
        <Grid.Row>
              <Grid.Column>
                <Segment color="blue" className="Home-stats"><h3>C: {this.props.players.homeCenter.playerName} &nbsp; &nbsp; &nbsp; &nbsp;|&nbsp; goals:{this.props.players.homeCenter.goals} &nbsp;|&nbsp; shots:{this.props.players.homeCenter.shots} &nbsp;|&nbsp; assists:{this.props.players.homeCenter.assists}  </h3></Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment color="red" className="Home-stats"><h3>C: {this.props.players.awayCenter.playerName} &nbsp; &nbsp; &nbsp; &nbsp;|&nbsp; goals:{this.props.players.awayCenter.goals} &nbsp;|&nbsp; shots:{this.props.players.awayCenter.shots} &nbsp;|&nbsp; assists:{this.props.players.awayCenter.assists}  </h3></Segment>
              </Grid.Column>
        </Grid.Row>
        <Grid.Row>
              <Grid.Column>
                <Segment color="blue" className="Home-stats"><h3>RW: {this.props.players.homeRightWing.playerName} &nbsp; &nbsp; &nbsp; &nbsp;|&nbsp; goals:{this.props.players.homeRightWing.goals} &nbsp;|&nbsp; shots:{this.props.players.homeRightWing.shots} &nbsp;|&nbsp; assists:{this.props.players.homeRightWing.assists}  </h3></Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment color="red" className="Home-stats"><h3>RW: {this.props.players.awayRightWing.playerName} &nbsp; &nbsp; &nbsp; &nbsp;|&nbsp; goals:{this.props.players.awayRightWing.goals} &nbsp;|&nbsp; shots:{this.props.players.awayRightWing.shots} &nbsp;|&nbsp; assists:{this.props.players.awayRightWing.assists}  </h3></Segment>
              </Grid.Column>
        </Grid.Row>
        <Grid.Row>
              <Grid.Column>
                <Segment color="blue" className="Home-stats"><h3>LD: {this.props.players.homeLeftDefender.playerName} &nbsp; &nbsp; &nbsp; &nbsp;|&nbsp; goals:{this.props.players.homeLeftDefender.goals} &nbsp;|&nbsp; shots:{this.props.players.homeLeftDefender.shots} &nbsp;|&nbsp; assists:{this.props.players.homeLeftDefender.assists}  </h3></Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment color="red" className="Home-stats"><h3>LD: {this.props.players.awayLeftDefender.playerName} &nbsp; &nbsp; &nbsp; &nbsp;|&nbsp; goals:{this.props.players.awayLeftDefender.goals} &nbsp;|&nbsp; shots:{this.props.players.awayLeftDefender.shots} &nbsp;|&nbsp; assists:{this.props.players.awayLeftDefender.assists}  </h3></Segment>
              </Grid.Column>
        </Grid.Row>
        <Grid.Row>
              <Grid.Column>
                <Segment color="blue" className="Home-stats"><h3>RD: {this.props.players.homeRightDefender.playerName} &nbsp; &nbsp; &nbsp; &nbsp;|&nbsp; goals:{this.props.players.homeRightDefender.goals} &nbsp;|&nbsp; shots:{this.props.players.homeRightDefender.shots} &nbsp;|&nbsp; assists:{this.props.players.homeRightDefender.assists}  </h3></Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment color="red" className="Home-stats"><h3>RD: {this.props.players.awayRightDefender.playerName} &nbsp; &nbsp; &nbsp; &nbsp;|&nbsp; goals:{this.props.players.awayRightDefender.goals} &nbsp;|&nbsp; shots:{this.props.players.awayRightDefender.shots} &nbsp;|&nbsp; assists:{this.props.players.awayRightDefender.assists}  </h3></Segment>
              </Grid.Column>
        </Grid.Row>
        <Grid.Row>
              <Grid.Column>
                <Segment color="blue" className="Home-stats"><h3>G: {this.props.players.homeGoalie.playerName} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;|&nbsp; assists:{this.props.players.homeGoalie.assists} &nbsp;|&nbsp; saves:{this.props.players.awayGoalie.saves} </h3></Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment color="red" className="Home-stats"><h3>G: {this.props.players.awayGoalie.playerName} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;|&nbsp; assists:{this.props.players.awayGoalie.assists} &nbsp;|&nbsp; saves:{this.props.players.awayGoalie.saves} </h3></Segment>
              </Grid.Column>
        </Grid.Row>
        <Grid.Row>

        </Grid.Row>
      </Grid>
      <Link to="/Setup" ><Button id="back_to_setup_button" size="massive" className="ui button" color= "green" type="submit" value="submit" >Start Another Game</Button></Link>
    </div>
   )
  }
}

export default withRouter(GameStatsContainer)
