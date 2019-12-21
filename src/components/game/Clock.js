import React from 'react'

class Clock extends React.Component {

  // Will move into css file
  divStyle = {
    display: "inline-block"
  };

  render() {
    const {minutes, seconds, playing, thisRound, nextRound} = this.props.value;
    return (
      <div>
        <div style={this.divStyle}>
          <table>
            <thead>
            <tr>
              <th>{thisRound.round}</th>
              <th>{thisRound.minutes}</th>
              <th>{thisRound.smallBlind}/{thisRound.bigBlind}/{thisRound.ante}</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td></td>
              <td> <a href={"#"}>&lt;&lt;</a>
                &nbsp;&nbsp;&nbsp;<a href={"#"}>&gt;</a>
                &nbsp;&nbsp;&nbsp;<a href={"#"}>&gt;&gt;</a> </td>
              <td></td>
            </tr>
            <tr>
              <td>{nextRound.round}</td>
              <td>{nextRound.minutes}</td>
              <td>{nextRound.smallBlind}/{nextRound.bigBlind}/{nextRound.ante}</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Clock
