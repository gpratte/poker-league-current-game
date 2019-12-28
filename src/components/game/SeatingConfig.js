import React from 'react'
import './GamePlayers.css'
import store from '../../store'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import SeatingPlayerAtTable from './SeatingPlayerAtTable'
import SeatingSeatsPerTable from './SeatingSeatsPerTable'
import {
  TOGGLE_CONFIGURE_SEATING,
  CHANGE_NUM_TABLES
} from '../../actions/GameActions'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const fiveTables = [1, 2, 3, 4, 5]

class SeatingConfig extends React.Component {

  renderNumberOfTables() {
    return fiveTables.map((num) => {
      return (
        <option key={num} value={num}>{num}</option>
      )
    })
  }

  handleChangeNumTables(e) {
    store.dispatch({type: CHANGE_NUM_TABLES, num: e.target.value});
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
    const {numTables} = game.seating;

    return (
      <div>
        <Modal show={this.props.value.showConfigureSeating}
               onHide={() => store.dispatch({type: TOGGLE_CONFIGURE_SEATING, show: false})}>
          <Modal.Body>
            <Form onSubmit={this.requestSeating}>
              <Form.Group as={Row} className="align-items-center">
                <Form.Label>&nbsp;&nbsp;Number of Tables</Form.Label>
                <Col>
                  <Form.Control as="select" defaultValue={numTables} id="tablesId" onChange={this.handleChangeNumTables}>
                    {this.renderNumberOfTables()}
                  </Form.Control>
                </Col>
              </Form.Group>

              <SeatingSeatsPerTable value={game}/>

              <SeatingPlayerAtTable value={game}
                                    renderNumberOfTables={this.renderNumberOfTables}/>

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
