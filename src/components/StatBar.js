import React from 'react'
import { Link } from 'react-router-dom'

export default function Statbar(props)  {

    return (
     <nav className={`Stat-bar`}>
       <div className='container-fluid'>
         <div className='navbar-header'>
           <Link to="/" className='navbar-brand'>{}</Link>
         </div>
         <ul className="nav navbar-nav">
           <li>Home team Score:</li>
           <li className="text-center">Time remaining:</li>
           <li>Away team Score:</li>
         </ul>
       </div>
     </nav>
   )

}
