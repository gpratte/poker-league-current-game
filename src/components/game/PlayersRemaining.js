import React from 'react'
import './Players.css'

class PlayersRemaining extends React.Component {

  render() {
    const {paidPlayers, paidPlayersRemaining, averageStack} = this.props.value;

    return (
      <div>
        <span>Players: {paidPlayersRemaining}/{paidPlayers} | Avg Stack: {averageStack}</span>
      </div>
    );
  }
}

export default PlayersRemaining
