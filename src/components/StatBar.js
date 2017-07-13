import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col} from 'react-bootstrap'

export default function StatBar(props)  {

    return (
     <div className={`Stat-bar`}>
       <div className='container-fluid'>
         <div className='navbar-header'>
           </div>
       </div>
       <Row className="">
          <Col xs={6} md={4} className="Home-stats"><h3>HOME TEAM</h3><h1> Score: {props.homeScore}  &nbsp; | &nbsp; Shots: {props.homeShots}</h1></Col>
          <Col xs={6} md={4} className="Time-clock"></Col>
          <Col xsHidden md={4} className="Away-stats"><h3>AWAY TEAM</h3>  <h1>Score: {props.awayScore} &nbsp; | &nbsp; Shots: {props.awayShots}</h1></Col>
        </Row>

     </div>
   )

}
