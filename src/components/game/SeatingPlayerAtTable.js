import React from 'react'
import './GamePlayers.css'
import store from '../../store'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import _ from "lodash";
import {
  ENABLE_SEATING_AT_TABLE,
  UPDATE_PLAYER_TABLE_REQUEST
} from "../../actions/GameActions";

class SeatingPlayerAtTable extends React.Component {

  handlePlayerSelect(e) {
    // console.log(e.target.options[e.target.selectedIndex].getAttribute('tablerequestindex'))
    store.dispatch({type: UPDATE_PLAYER_TABLE_REQUEST, playerTableRequest: {
        gamePlayerId: e.target.value,
        tableRequestIndex: e.target.options[e.target.selectedIndex].getAttribute('tablerequestindex')
    }})
  }

  handleAddAnotherRequest() {
    alert('handleAddAnotherRequest')
  }

  renderGamePlayers(gamePlayers, index) {
    return gamePlayers.map((gamePlayer) => {
      const {
        id, firstName, lastName
      } = gamePlayer;
      return (
        <option key={id} value={id} tablerequestindex={index}>{firstName}{(firstName && lastName) ? ' ' : ''}{lastName}</option>
      )
    })
  }

  renderTableRequests(tableRequests, gamePlayers, renderGamePlayers, handlePlayerSelect) {
    return _.map(tableRequests, function (tableRequest, index) {
      return (
        <Form.Group key={index}>
          <Form.Label>Seat a Player at a Table</Form.Label>
          <Form.Control as="select" defaultValue={tableRequest.playerId} onChange={handlePlayerSelect}>
            <option key={-1} value={-1} tablerequestindex={index}> </option>
            {renderGamePlayers(gamePlayers, index)}
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
          {this.renderTableRequests(tableRequests, gamePlayers, this.renderGamePlayers, this.handlePlayerSelect)}
          <Button variant="outline-secondary" onChange={() => this.handleAddAnotherRequest()}>
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
