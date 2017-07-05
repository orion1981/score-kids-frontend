import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col} from 'react-bootstrap'

export default function Statbar(props)  {

    return (
     <div className={`Stat-bar`}>
       <div className='container-fluid'>
         <div className='navbar-header'>
           <Link to="/" className='navbar-brand'>home</Link>
           </div>
       </div>
       <Row className="">
          <Col xs={6} md={4} className="Home-stats"><code>HOME TEAM Score:{props.homeScore} Shots:{props.homeShots}</code></Col>
          <Col xs={6} md={4} className="Time-clock"><code>Time remaining:</code></Col>
          <Col xsHidden md={4} className="Away-stats"><code>AWAY TEAM Shots:{props.awayShots} Score:{props.awayScore}</code></Col>
        </Row>

     </div>
   )

}
