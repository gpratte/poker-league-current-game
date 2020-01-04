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
  SUBMIT_TABLE_REQUESTS
} from '../../actions/GameActions'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const fiveTables = [1, 2, 3, 4, 5]

class SeatingConfig extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      gamePlayers: props.game.gamePlayers,
      seating: Object.assign({}, props.game.seating,
        {numSeatsPerTable: [...props.game.seating.numSeatsPerTable]},
        {tableRequests: [...props.game.seating.tableRequests]},
        {tables: [...props.game.seating.tables]})
    };
    this.handleChangeSeatsPerTables = this.handleChangeSeatsPerTables.bind(this);
  }


  renderNumberOfTables() {
    return fiveTables.map((num) => {
      return (
        <option key={num} value={num}>{num}</option>
      )
    })
  }

  handleChangeNumTables(e) {
    const newNumSeatsPerTable = [...this.state.seating.numSeatsPerTable];

    const newNumTables = parseInt('' + e.target.value);
    let delta = newNumTables - this.state.seating.numTables;
    let deltaPositive = true;
    if (delta < 0) {
      deltaPositive = false;
      delta = Math.abs(delta);
    }
    for (let i = 0; i < delta; ++i) {
      if (deltaPositive) {
        newNumSeatsPerTable.push(10);
      } else {
        newNumSeatsPerTable.pop();
      }
    }
    const newSeating = (Object.assign({}, this.state.seating,
      {numTables: newNumTables},
      {numSeatsPerTable: newNumSeatsPerTable}))
    this.setState({seating: newSeating})
  }

  handleChangeSeatsPerTables(e, tableNum) {
    const numSeats = parseInt('' + e.target.value);
    const newNumSeatsPerTable = [...this.state.seating.numSeatsPerTable];
    newNumSeatsPerTable[tableNum] = numSeats;
    const newSeating = (Object.assign({}, this.state.seating,
      {numSeatsPerTable: newNumSeatsPerTable}))
    this.setState({seating: newSeating})
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
    return (
      <div>
        <Modal show={this.props.game.showConfigureSeating}
               onHide={() => store.dispatch({type: TOGGLE_CONFIGURE_SEATING, show: false})}>
          <Modal.Body>
            <Form onSubmit={this.requestSeating}>
              <Form.Group as={Row} className="align-items-center">
                <Form.Label>&nbsp;&nbsp;Number of Tables</Form.Label>
                <Col>
                  <Form.Control as="select"
                                defaultValue={this.state.seating.numTables}
                                id="tablesId"
                                onChange={(e) => this.handleChangeNumTables(e)}>
                    {this.renderNumberOfTables()}
                  </Form.Control>
                </Col>
              </Form.Group>

              <SeatingSeatsPerTable seating={this.state.seating} handleChangeSeatsPerTables={this.handleChangeSeatsPerTables}/>

              <SeatingPlayerAtTable gamePlayers={this.state.gamePlayers} seating={this.state.seating}/>

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
