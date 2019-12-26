import React from 'react'
import {flatMap, map} from 'lodash';
import Table from 'react-bootstrap/Table';
import SeatingConfig from "./SeatingConfig";
import Button from "react-bootstrap/Button";
import store from "../../store";
import {TOGGLE_CONFIGURE_SEATING} from "../../actions/GameActions";

class Seating extends React.Component {

  renderTables(tables) {
    const seats = flatMap(tables, ({seats}) =>
      map(seats, seat => ({...seat}))
    );
    return seats.map((seat, index) => {
      const {seatNumber, tableNumber, gamePlayerName} = seat;
      return (
        <tr key={index}>
          <td>{tableNumber}</td>
          <td>{seatNumber}</td>
          <td>{gamePlayerName}</td>
        </tr>
      )
    })
  }

  // renderRequests(seatRequests) {
  //   return seatRequests.map((seatRequest, index) => {
  //     const { id, playerId, tableNum} = seatRequest;
  //     return (
  //       <tr key={id}>
  //         <td>
  //           <select defaultValue={playerId}>
  //             <option value="11">Jane Penn</option>
  //             <option value="12">Casey Template</option>
  //           </select>
  //         </td>
  //         <td>
  //           <select defaultValue={tableNum}>
  //             <option value="1">1</option>
  //             <option value="2">2</option>
  //             <option value="3">3</option>
  //             <option value="4">4</option>
  //             <option value="5">5</option>
  //           </select>
  //         </td>
  //       </tr>
  //     )
  //   })
  // }

  render() {
    const game = this.props.value;
    const {tables} = game;
    return (
      <div>
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
        <Button variant="outline-secondary"
                onClick={() => store.dispatch({type: TOGGLE_CONFIGURE_SEATING, show: true})}>
          Configure Seating
        </Button>
        <SeatingConfig value={game}/>
      </div>
    );
  }
}

export default Seating
