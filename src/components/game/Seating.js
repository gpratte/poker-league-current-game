import React from 'react'
import { flatMap, map } from 'lodash';
import Table from 'react-bootstrap/Table';

class Seating extends React.Component {

  renderTables(tables) {
    const seats = flatMap(tables, ({ seats }) =>
      map(seats, seat => ({ ...seat }))
    );
    return seats.map((seat, index) => {
      const { seatNumber, tableNumber, gamePlayerName} = seat;
      return (
        <tr key={index}>
          <td>{tableNumber}</td>
          <td>{seatNumber}</td>
          <td>{gamePlayerName}</td>
        </tr>
      )
    })
  }

  renderRequests(seatRequests) {
    return seatRequests.map((seatRequest, index) => {
      const { id, playerId, playerName, tableNum} = seatRequest;
      return (
        <tr key={id}>
          <td>
            <select defaultValue={playerId}>
              <option value="11">Jane Penn</option>
              <option value="12">Casey Template</option>
            </select>
          </td>
          <td>
            <select defaultValue={tableNum}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </td>
        </tr>
      )
    })
  }

  render() {
    const {numTables, numSeatPerTable, seatRequests, tables} = this.props.value;
    return (
      <div>
        <div>
          <p>Number of Tables</p>
          <p>
            <select defaultValue={numTables}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </p>
          <p>Seats per Table</p>
          <p>
            <select defaultValue={numSeatPerTable}>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </p>
          <p>Request Table</p>
          <Table striped bordered size="sm">
            <tbody>
            {this.renderRequests(seatRequests)}
            </tbody>
          </Table>
          <Table striped bordered size="sm">
            <thead>
            <tr>
              <th>Table</th>
              <th>Seat</th>
              <th>Name</th>
            </tr>
            </thead>
            <tbody>
            {this.renderTables(tables)}
            </tbody>
          </Table>
          <p>
            <button>Reset Seating</button>
          </p>
        </div>
      </div>
    );
  }
}

export default Seating
