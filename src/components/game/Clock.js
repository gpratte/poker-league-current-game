import React from 'react'

class Clock extends React.Component {

  // Will move into css file
  divStyle = {
    display: "inline-block"
  };

  render() {
    return (
      <div>
        <div style={this.divStyle}>
          <table>
            <tr>
              <th>Round 1</th>
              <th>20:00</th>
              <th>25/50/0</th>
            </tr>
            <tr>
              <td></td>
              <td> <a href={"#"}>&lt;&lt;</a>
                &nbsp;&nbsp;&nbsp;<a href={"#"}>&gt;</a>
                &nbsp;&nbsp;&nbsp;<a href={"#"}>&gt;&gt;</a> </td>
              <td></td>
            </tr>
            <tr>
              <td>Round 2</td>
              <td></td>
              <td>50/100/0</td>
            </tr>
          </table>
        </div>
        <hr/>
      </div>
    );
  }
}

export default Clock
