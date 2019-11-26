import React from 'react'
import Table from 'react-bootstrap/Table';

class Seating extends React.Component {

  renderSeats(seats) {
    return seats.map((seat, index) => {
      const { id, seatNumber, tableNumber, gamePlayerName} = seat;
      return (
        <tr key={id}>
          <td>{tableNumber}</td>
          <td>{seatNumber}</td>
          <td>{gamePlayerName}</td>
        </tr>
      )
    })
  }

  renderTables(tables) {
    return tables.map((table, index) => {
      const { seats } = table;
      return this.renderSeats(seats);
    })
  }

  renderRequests(seatRequests) {
    return seatRequests.map((seatRequest, index) => {
      const { id, playerId, playerName, tableNum} = seatRequest;
      return (
        <tr key={id}>
          <td>
            <select>
              <option selected={11 === playerId}>Jane Penn</option>
              <option selected={12 === playerId}>Casey Template</option>
            </select>
          </td>
          <td>
            <select>
              <option selected={1 === tableNum}>1</option>
              <option selected={2 === tableNum}>2</option>
              <option selected={3 === tableNum}>3</option>
              <option selected={4 === tableNum}>4</option>
              <option selected={5 === tableNum}>5</option>
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
            <select>
              <option selected={1 === numTables}>1</option>
              <option selected={2 === numTables}>2</option>
              <option selected={3 === numTables}>3</option>
              <option selected={4 === numTables}>4</option>
              <option selected={5 === numTables}>5</option>
            </select>
          </p>
          <p>Seats per Table</p>
          <p>
            <select>
              <option selected={3 === numSeatPerTable}>3</option>
              <option selected={4 === numSeatPerTable}>4</option>
              <option selected={5 === numSeatPerTable}>5</option>
              <option selected={6 === numSeatPerTable}>6</option>
              <option selected={7 === numSeatPerTable}>7</option>
              <option selected={8 === numSeatPerTable}>8</option>
              <option selected={9 === numSeatPerTable}>9</option>
              <option selected={10 === numSeatPerTable}>10</option>
            </select>
          </p>
          <p>Request Table</p>
          <Table striped bordered size="sm">
            {this.renderRequests(seatRequests)}
          </Table>
          <Table striped bordered size="sm">
            <tr>
              <th>Table</th>
              <th>Seat</th>
              <th>Name</th>
            </tr>
            {this.renderTables(tables)}
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
