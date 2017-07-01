import React from "react"
import TeamItem from "./TeamItem"
import { DropdownButton, MenuItem } from 'react-bootstrap'

export default class TeamSelect extends React.Component {
  constructor(props){
    super(props)



  }
  render(){
  
    return(
      <DropdownButton id="Pick-Team" title="Select Team">
        <MenuItem >Create New Team</MenuItem>
          {this.props.teams.map(team =><TeamItem id={team.id} name={team.name} location={team.location} mascot={team.mascot} />)}
      </DropdownButton>
    );
  }
}
