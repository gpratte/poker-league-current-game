import React from 'react'
import './GamePlayers.css'
import store from '../../store'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import SeatPlayerAtTableConfig from './SeatPlayerAtTableConfig'
import {
  TOGGLE_CONFIGURE_SEATING
} from '../../actions/GameActions'

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
    const {numTables, numSeatsPerTable} = game.seating;

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
              <SeatPlayerAtTableConfig value={game}
                                       renderNumberOfTables={this.renderNumberOfTables}
                                       renderGamePlayers={this.renderGamePlayers}/>
              <Modal.Footer>
                <Button variant="secondary" onClick={() => {
                  store.dispatch({type: TOGGLE_CONFIGURE_SEATING, show: false})
                }}>
                  Cancel
                </Button>
                <Button variant="primary" type="submit">
                  Seat The Players
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
