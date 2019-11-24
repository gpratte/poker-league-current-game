import React from 'react'

class Seating extends React.Component {

  // Will move into css file
  divStyle = {
    display: "inline-block"
  };

  renderSeats(tables) {
    return tables.map((position, index) => {
      const { id, table, seat} = position;
      return (
        <tr key={id}>
          <td>{table}</td>
          <td>{seat}</td>
        </tr>
      )
    })
  }


  render() {
    const {tables} = this.props.value;
    return (
      <div>
        <h1>Seating</h1>
        <div style={this.divStyle}>
          <p>Number of Tables</p>
          <p>
            <select>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </p>
          <p>Seats per Table</p>
          <p>
            <select>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
            </select>
          </p>
          <p>
            <button>Reset Seating</button>
          </p>
          <table>
            <tr>
              <th></th>
              <th>Table</th>
              <th>Seat</th>
            </tr>
            {this.renderSeats(tables)}
          </table>
        </div>
      </div>
    );
  }
}

export default Seating
