import React from "react"
import TeamItem from "./TeamItem"
import { Dropdown, Button } from 'semantic-ui-react'

export default class TeamSelect extends React.Component {
  constructor(props){
    super(props)



  }

  getTeams = () => (

       this.props.teams.map(t => {
          let obj = {key:`${t.name}`, value: t, text:`${t.name} ${t.mascot} "${t.location}"`}
          return obj
      }))



  sortAlpha = (array) => array.sort((a, b) => a.text.localeCompare(b.text))

  render(){
    const sortedTeams = this.sortAlpha(this.getTeams())
    return(
      <Button.Group color='purple' fluid size="massive">
    <Dropdown placeholder='Select Team'
   search
   floating
   labeled
   button
   fluid
   className='team icon'
   icon='circle'
   options={sortedTeams}
   onChange={this.props.handleChange}
 />
 </Button.Group>

)
  }
}




// return(
//   <DropdownButton id="Pick-Team" title="Select Team">
//   <MenuItem >Create New Team</MenuItem>
//   {this.props.teams.map(team =><TeamItem id={team.id} name={team.name} location={team.location} mascot={team.mascot} />)}
//   </DropdownButton>
// );
