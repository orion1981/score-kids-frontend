import React from 'react'

export default function Player(props)  {

  return(
    <div>
      <div className="player-info"></div>The Player
      <img style={props.orientation} src="https://userscontent2.emaze.com/images/ca4cecf5-8daf-49fa-93dd-02cd2958d2af/89c38a2288e09204c53fb13fdf1a082a.png"/>
    </div>
  )

}



// const playerStyle = {
//   backgroundImage: url(""),
//   backgroundRepeat: noRepeat,
//   minWidth: 100,
//   minHeight: 400,
//   width: 50,
//   height: 50
// }
