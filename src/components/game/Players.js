import React from 'react'

class Players extends React.Component {

  // Will move into css file
  divStyle = {
    display: "inline-block"
  };
  knockedOutStyle = {
    color: "red"
  };

  renderPlayers(players) {
    return players.map((player, index) => {
      const { id, firstName, lastName, buyInCollected, rebuyAddOnCollected, annualTocCollected,
        quarterlyTocCollected, points, finish, knockedOut} = player;
      return (
        <tr key={id}>
          <td style={this.knockedOutStyle}>{knockedOut ? 'x' : ''}</td>
          <td>{finish}</td>
          <td>{firstName}{(firstName && lastName) ? <br/> : ''}{lastName}</td>
          <td>{buyInCollected ? buyInCollected : ''}</td>
          <td>{rebuyAddOnCollected ? rebuyAddOnCollected : ''}</td>
          <td>{annualTocCollected ? String.fromCharCode(10004) : ''}</td>
          <td>{quarterlyTocCollected ? String.fromCharCode(10004) : ''}</td>
          <td>{points ? points : ''}</td>
        </tr>
      )
    })
  }

  render() {
    const {paidPlayers, paidPlayersRemaining, averageStack, players} = this.props.value;

    return (
      <div>
        <p><span>Players: {paidPlayersRemaining}/{paidPlayers} | Avg Stack: {averageStack}</span></p>
        <div style={this.divStyle}>
          <table>
            <tr>
              <th></th>
              <th>Fin</th>
              <th>Name</th>
              <th>Buy<br/>In</th>
              <th>Re<br/>Buy</th>
              <th>TOC</th>
              <th>QTOC</th>
              <th>Pts</th>
            </tr>
            {this.renderPlayers(players)}
          </table>
        </div>
        <hr/>
      </div>
    );
  }
}

export default Players
