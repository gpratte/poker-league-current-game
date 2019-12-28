import React from 'react'
import './GamePlayers.css'
import store from '../../store'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import _ from "lodash";
import {
  ADD_EXISTING_PLAYER_TO_GAME,
  ADD_TABLE_REQUEST,
  ENABLE_SEATING_AT_TABLE
} from "../../actions/GameActions";
import Modal from "react-bootstrap/Modal";

class SeatingPlayerAtTable extends React.Component {

  handleAddAnotherRequest() {
    const nodes = document.getElementsByClassName('formgroup');
    console.log(nodes);
  }

  renderGamePlayers(gamePlayers) {
    return gamePlayers.map((gamePlayer) => {
      const {
        id, firstName, lastName
      } = gamePlayer;
      return (
        <option key={id} value={id}>{firstName}{(firstName && lastName) ? ' ' : ''}{lastName}</option>
      )
    })
  }

  renderTableRequests(tableRequests, gamePlayers, renderGamePlayers) {
    console.log('renderTableRequests ' + tableRequests.length)
    return _.map(tableRequests, function (tableRequest) {
      return (
        <Form.Group>
          <Form.Label>Seat a Player at a Table</Form.Label>
          <Form.Control as="select" defaultValue={tableRequest.playerId}>
            {renderGamePlayers(gamePlayers)}
          </Form.Control>
        </Form.Group>
      )
    });
  }

  render() {
    const game = this.props.value;
    const {gamePlayers, playerRequestTable} = game;
    const {tableRequests} = game.seating;

    if (playerRequestTable) {
      return (
        <div>
          {this.renderTableRequests(tableRequests, gamePlayers, this.renderGamePlayers)}
          <Button variant="outline-secondary" onClick={() => this.handleAddAnotherRequest()}>
            Seat Another
          </Button>
        </div>
      );
    } else {
      return (
        <Button variant="outline-secondary" onClick={() => {
          store.dispatch({type: ENABLE_SEATING_AT_TABLE})
        }}>
          Seat a Player at a Table
        </Button>
      );
    }
  }
}

export default SeatingPlayerAtTable
