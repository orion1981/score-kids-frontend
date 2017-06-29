import React from 'react'

export default class GameSetupContainer extends React.Component {
  constructor(){
    super()

    this.state = {
      homeTeam: "",
      awayTeam: "",
      homePlayers: [],
      awayPlayers: []
    }

  }

  render(){
    return(
    <div>
      <h1>Setup Page</h1>
    </div>
   )
  }
}
