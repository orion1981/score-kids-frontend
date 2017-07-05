import React from 'react'
import { Row , Col } from 'react-flexbox-grid'


export default class GameSelector extends React.Component {
  constructor(){
    super()


  }

  render(){
    return(

        <Row>
          <Col md={4}><input type="text" name="name" placeholder="game location..." ></input></Col>
          <Col md={4}><input type="text" name="name" placeholder="game lenth..." ></input></Col>
          <Col md={4}><input type="text" name="name" placeholder="date of game..." ></input> </Col>

        </Row>

      )
  }
}
