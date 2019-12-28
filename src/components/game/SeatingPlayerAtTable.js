import React from 'react'
import './GamePlayers.css'
import store from '../../store'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import _ from "lodash";
import {
  ENABLE_SEATING_AT_TABLE,
  ADD_TABLE_REQUEST
} from "../../actions/GameActions";

const fiveTables = [1, 2, 3, 4, 5]

class SeatingPlayerAtTable extends React.Component {

  // This function is in two files, not DRY
  handleAddAnotherRequest() {
    store.dispatch({type: ADD_TABLE_REQUEST})
  }

  renderNumberOfTables() {
    return fiveTables.map((num) => {
      return (
        <option key={num} value={num}>{num}</option>
      )
    })
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

  renderTableRequests(tableRequests, gamePlayers, renderGamePlayers, renderNumberOfTables) {
    return _.map(tableRequests, function (tableRequest, index) {
      return (
        <Form.Group key={index}>
          <Form.Label>Seat a Player at a Table</Form.Label>
          <Form.Control as="select" defaultValue={tableRequest.playerId}>
            <option key={-1} value={-1} tablerequestindex={index}> </option>
            {renderGamePlayers(gamePlayers, index)}
          </Form.Control>
          <Form.Control as="select" defaultValue={tableRequest.tableNum}>
            {renderNumberOfTables()}
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
          {this.renderTableRequests(tableRequests, gamePlayers,
            this.renderGamePlayers, this.renderNumberOfTables)}
          <Button variant="outline-secondary" onClick={this.handleAddAnotherRequest}>
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
