import React from 'react'
import './Players.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';

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
