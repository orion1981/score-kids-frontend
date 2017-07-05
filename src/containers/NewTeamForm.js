import React from 'react'
import { Form} from 'semantic-ui-react'

export default class NewTeamForm extends React.Component {
  constructor(){
    super()

    this.state = {

    }
  }

  render(){
    return(
      <Form className="ui form">
      <div className="field">
         <label>Team Name</label>
         <input type="text" name="team-name" placeholder="Team name"/>
        </div>
        <div className="field">
         <label>Mascot</label>
         <input type="text" name="mascot" placeholder="Mascot"/>
        </div>
        <div className="field">
          <label>location</label>
          <input type="text" name="location" placeholder="location"/>
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
