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
  CHANGE_NUM_TABLES,
  SUBMIT_TABLE_REQUESTS
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
    let valueAsNumber = parseInt('' + e.target.elements.tablesId.value);
    const seatingConfig = {numTables: valueAsNumber};

    seatingConfig['numSeatsPerTable'] = [];
    let index = 0;
    while(true) {
      if (e.target.elements['seatsId-'+index]) {
        valueAsNumber = parseInt('' + e.target.elements['seatsId-'+index].value);
        seatingConfig.numSeatsPerTable.push(valueAsNumber);
        ++index;
      } else {
        break;
      }
    }

    seatingConfig['tableRequests'] = []
    index = 0;
    while(true) {
      if (e.target.elements['playerRequestId-'+index]) {
        valueAsNumber = parseInt('' + e.target.elements['playerRequestId-'+index].value);
        if (valueAsNumber !== -1) {
          let tableRequest = {playerId: valueAsNumber}
          valueAsNumber = parseInt('' + e.target.elements['playerTableRequestId-'+index].value);
          tableRequest['tableNum'] = valueAsNumber;
          seatingConfig.tableRequests.push(tableRequest);
        }
        ++index;
      } else {
        break;
      }
    }

    store.dispatch({type: SUBMIT_TABLE_REQUESTS, seatingConfig})
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

              <SeatingPlayerAtTable value={game}/>

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
