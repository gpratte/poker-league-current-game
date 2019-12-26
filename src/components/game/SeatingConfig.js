import React from 'react'
import './GamePlayers.css'
import store from '../../store'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import {
  TOGGLE_CONFIGURE_SEATING
} from '../../actions/GameActions'
import _ from "lodash";

const fiveTables = [1, 2, 3, 4, 5]
const tenSeats = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

class SeatingConfig extends React.Component {

  renderNumberOfTables() {
    return fiveTables.map((num) => {
      return (
        <option key={num} value={num}>{num}</option>
      )
    })
  }

  renderNumberOfSeatsPerTable() {
    return tenSeats.map((num) => {
      return (
        <option key={num} value={num}>{num}</option>
      )
    })
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


  renderTableRequests(tableRequests, gamePlayers) {
    return _.forEach(tableRequests, function (request) {
      return (
        <div>
          <Form.Control as="select" defaultValue={request.gamePlayerId} requestingGamePlayerid={request.gamePlayerId}>
            {this.renderGamePlayers(gamePlayers)}
          </Form.Control>
          <Form.Control as="select" defaultValue={request.tableNum} requestedTableGamePlayerid={request.gamePlayerId}>
            {this.renderNumberOfTables()}
          </Form.Control>
        </div>
      )
    });
  }

  renderEmptyTableRequest(gamePlayers) {
    return (
      <div>
        <Form.Control as="select" requestingGamePlayerid={'-1'}>
          <option key={-1}> </option>
          {this.renderGamePlayers(gamePlayers)}
        </Form.Control>
        <Form.Control as="select" requestedTableGamePlayerid={'-1'}>
          {this.renderNumberOfTables()}
        </Form.Control>
      </div>
    )
  }

  requestSeating = (e) => {
    e.preventDefault();
    console.log('request seating')
    // store.dispatch({type: UPDATE_GAME_PLAYER, gamePlayer: {
    //     id: e.target.elements.gamePlayerId.value,
    //     buyInCollected: e.target.elements.buyInId.checked,
    //     annualTocCollected: e.target.elements.tocId.checked,
    //     quarterlyTocCollected: e.target.elements.qtocId.checked,
    //     rebuyAddOnCollected: e.target.elements.rebuyId.checked,
    //     knockedOut: e.target.elements.knockedOutId.checked,
    //     finish: e.target.elements.finishId.value,
    //     chop: e.target.elements.chopId.value,
    //   }})
  }

  render() {
    const game = this.props.value;
    const {gamePlayers} = game;
    const {numTables, numSeatsPerTable, tableRequests} = game.seating;

    return (
      <div>
        <Modal show={this.props.value.showConfigureSeating}
               onHide={() => store.dispatch({type: TOGGLE_CONFIGURE_SEATING, show: false})}>
          <Modal.Body>
            <Form onSubmit={this.requestSeating}>
              <Form.Group>
                <Form.Label>&nbsp;&nbsp;Number of Tables</Form.Label>
                <Form.Control as="select" defaultValue={numTables} id="tablesId">
                  {this.renderNumberOfTables()}
                </Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label>&nbsp;&nbsp;Seats Per Table</Form.Label>
                <Form.Control as="select" defaultValue={numSeatsPerTable} id="seatsId">
                  {this.renderNumberOfSeatsPerTable()}
                </Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label>Request Table</Form.Label>
                {this.renderTableRequests(tableRequests, gamePlayers)}
                {this.renderEmptyTableRequest(gamePlayers)}
              </Form.Group>
              <Modal.Footer>
                <Button variant="secondary" onClick={() => {
                  store.dispatch({type: TOGGLE_CONFIGURE_SEATING, show: false})
                }}>
                  Cancel
                </Button>
                <Button variant="primary" type="submit">
                  Request Seating
                </Button>
              </Modal.Footer>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default SeatingConfig
