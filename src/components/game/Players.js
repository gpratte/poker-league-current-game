import React from 'react'
import Table from 'react-bootstrap/Table';

class Players extends React.Component {

  knockedOutStyle = {
    color: "red"
  };

  renderPlayers(players) {
    return players.map((player, index) => {
      const {
        id, firstName, lastName, buyInCollected, rebuyAddOnCollected, annualTocCollected,
        quarterlyTocCollected, points, finish, knockedOut
      } = player;
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
        <Table striped bordered size="sm">
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
        </Table>
      </div>
    );
  }
}

export default Players
