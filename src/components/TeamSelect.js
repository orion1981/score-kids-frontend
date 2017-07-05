import React from "react"
import TeamItem from "./TeamItem"
import { Dropdown } from 'semantic-ui-react'

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
    <Dropdown
   search
   floating
   labeled
   button
   className='team icon'
   icon='circle'
   options={sortedTeams}
   onChange={this.props.handleChange}
 />
    // <div className="default text">Pick A Team</div>

)
  }
}




// return(
//   <DropdownButton id="Pick-Team" title="Select Team">
//   <MenuItem >Create New Team</MenuItem>
//   {this.props.teams.map(team =><TeamItem id={team.id} name={team.name} location={team.location} mascot={team.mascot} />)}
//   </DropdownButton>
// );
