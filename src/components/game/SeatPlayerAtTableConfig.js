import React from 'react'
import './GamePlayers.css'
import store from '../../store'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import _ from "lodash";
import {ENABLE_SEATING_AT_TABLE} from "../../actions/GameActions";

class SeatPlayerAtTableConfig extends React.Component {

  renderTableRequests(tableRequests, gamePlayers) {
    return _.forEach(tableRequests, function (request) {
      return (
        <div>
          <Form.Control as="select" defaultValue={request.gamePlayerId} id={'requestingGamePlayerid'+request.gamePlayerId}>
            {this.props.renderGamePlayers(gamePlayers)}
          </Form.Control>
          <Form.Control as="select" defaultValue={request.tableNum} id={'requestedTableGamePlayer'+request.gamePlayerId}>
            {this.props.renderNumberOfTables()}
          </Form.Control>
        </div>
      )
    });
  }

  renderEmptyTableRequest(gamePlayers) {
    return (
      <div>
        <Form.Control as="select" id={'requestingGamePlayerid-1'}>
          <option key={-1}> </option>
          {this.props.renderGamePlayers(gamePlayers)}
        </Form.Control>
        <Form.Control as="select" id={'requestedTableGamePlayer-1'}>
          {this.props.renderNumberOfTables()}
        </Form.Control>
      </div>
    )
  }

  render() {
    const game = this.props.value;
    const {gamePlayers, playerRequestTable} = game;
    const {tableRequests} = game.seating;

    if (playerRequestTable) {
      return (
        <Form.Group>
          <Form.Label>Seat a Player at a Table</Form.Label>
          {this.renderTableRequests(tableRequests, gamePlayers)}
          {this.renderEmptyTableRequest(gamePlayers)}
          <Button variant="outline-secondary">
            Seat Another Player at a Table
          </Button>
        </Form.Group>
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

export default SeatPlayerAtTableConfig
