import React from 'react'
import axios from 'axios'
import { Form} from 'semantic-ui-react'

export default class NewTeamForm extends React.Component {
  constructor(){
    super()

    this.state = {
      teamPlayers:[]
    }
  }

  createTeam(){
    const url = "http:localhost:3000/api/v1/teams"
    axios({
      method: 'post',
      url: url,
      data: {
        // location: location,
        // mascot: mascot,
        // players: teamPlayers
      }
    }).then(response => console.log(response.data))
  }



  render(){
    return(
      <Form className="ui form">
      <div className="field">
         <label>Team Name</label>
         <input type="text" name="team-name" placeholder="Team name.."/>
        </div>
        <div className="field">
         <label>Mascot</label>
         <input type="text" name="mascot" placeholder="Mascot.."/>
        </div>
        <div className="field">
          <label>Location</label>
          <input type="text" name="location" placeholder="Location.."/>
        </div>
          <h1>Players</h1>
          <div className='two fields'>
            <div className="six wide field">
                <label>Goalie:</label>
                <input type="text" name="goalie[name]" placeholder="player name...."/>
            </div>
            <div className="six wide field">
              <label>Goalie #:</label>
              <input type="text" name="goalie[number]" placeholder="Jersey #"/>
            </div>
          </div>
          <div className='two fields'>
            <div className="six wide field">
                <label>Center:</label>
                <input type="text" name="center[name]" placeholder="player name...."/>
            </div>
            <div className="six wide field">
              <label>Center #:</label>
              <input type="text" name="center[number]" placeholder="Jersey #"/>
            </div>
          </div>
          <div className='two fields'>
            <div className="six wide field">
                <label>Left Winger:</label>
                <input type="text" name="left-wing[name]" placeholder="player name...."/>
            </div>
            <div className="six wide field">
              <label>Left Winger #:</label>
              <input type="text" name="left-wing[number]" placeholder="Jersey #"/>
            </div>
          </div>
          <div className='two fields'>
            <div className="six wide field">
                <label>Right Winger:</label>
                <input type="text" name="right-wing[name]" placeholder="player name...."/>
            </div>
            <div className="six wide field">
              <label>Right Winger #:</label>
              <input type="text" name="right-wing[number]" placeholder="Jersey #"/>
            </div>
          </div>
          <div className='two fields'>
            <div className="six wide field">
                <label>Left Defense:</label>
                <input type="text" name="left-def[name]" placeholder="player name...."/>
            </div>
            <div className="six wide field">
              <label>Left Defense #:</label>
              <input type="text" name="left-def[number]" placeholder="Jersey #"/>
            </div>
          </div>
          <div className='two fields'>
            <div className="six wide field">
                <label>Right Defense:</label>
                <input type="text" name="right-def[name]" placeholder="player name...."/>
            </div>
            <div className="six wide field">
              <label>Right Defense #:</label>
              <input type="text" name="right-def[number]" placeholder="Jersey #"/>
            </div>
          </div>

        <button className="ui button" type="submit">Submit</button>
      </Form>
    )
  }
}




// <div className="ui checkbox">
// <input type="checkbox" tabindex="0" className="hidden"/>
// <label>I agree to the Terms and Conditions</label>
// </div>
