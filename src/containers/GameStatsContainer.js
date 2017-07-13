import React from 'react'

export default class GameStatsContainer extends React.Component {
  constructor(){
    super()

    this.state ={
      allPlayerStats: [],
    }

  }


    componentDidMount(){
        fetch('http://localhost:3000/api/v1/player_games')
                .then(res => res.json())
                .then(data => this.setState({allPlayerStats: data}))
      }


  render(){
    return(
    <div>
      <h1>Game Stats</h1>
      <div id="chart-container"></div>
    </div>
   )
  }
}
