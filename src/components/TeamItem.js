import React from 'react'
import { MenuItem } from 'react-bootstrap'


const TeamItem = (props) => {
  
  return (
    <MenuItem key={props.id} >{props.name}</MenuItem>
  )
}

export default TeamItem
