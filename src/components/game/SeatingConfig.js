import React from 'react'
import './GamePlayers.css'
import store from '../../store'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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

  renderTables() {
    return fiveTables.map((num) => {
      return (
        <option key={num} value={num}>{num}</option>
      )
    })
  }

  renderSeats() {
    return tenSeats.map((num) => {
      return (
        <option key={num} value={num}>{num}</option>
      )
    })
  }

  updatePlayer = (e) => {
    e.preventDefault();
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
    let gamePlayer = _.find(game.gamePlayers, {'id': game.editGamePlayerId});

    return (
      <div>
        <Modal show={this.props.value.showConfigureSeating}
               onHide={() => store.dispatch({type: TOGGLE_CONFIGURE_SEATING, show: false})}>
          <Modal.Body>
            <Form onSubmit={this.updatePlayer}>
              <Form.Group>
                <Form.Label>&nbsp;&nbsp;Number of Tables</Form.Label>
                <Form.Control as="select" id="tablesId">
                  {this.renderTables()}
                </Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label>&nbsp;&nbsp;Seats Per Table</Form.Label>
                <Form.Control as="select" id="seatsId">
                  {this.renderSeats()}
                </Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label>Request Table</Form.Label>
                <Form.Control as="select" id="atPersonId">
                  {this.renderSeats()}
                </Form.Control>
                <Form.Control as="select" id="atTableId">
                  {this.renderSeats()}
                </Form.Control>
              </Form.Group>
              <Modal.Footer>
                <Button variant="secondary" onClick={() => {
                  store.dispatch({type: TOGGLE_CONFIGURE_SEATING, show: false})
                }}>
                  Cancel
                </Button>
                <Button variant="primary" type="submit">
                  Update Player
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
