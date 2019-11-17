import React from 'react'
import moment from 'moment-timezone'

class Details extends React.Component {

  // Will move into css file
  divStyle = {
    display: "inline-block"
  };

  renderPayouts(payouts) {
    return payouts.map((payout, index) => {
      const { id, place, amount } = payout
      return (
        <tr key={id}>
          <td>{place}</td>
          <td>${amount}</td>
        </tr>
      )
    })
  }

  render() {
    const {
      date, hostName, transportRequired, totalCollected, totalCombinedTocCalculated,
      kittyCalculated, prizePotCalculated, payouts} = this.props.value;

    const gameDate = moment(date).tz('America/Chicago').format('MM/DD')
    const tocPlusKitty = totalCombinedTocCalculated + kittyCalculated;

    return (
      <div>
        <p><span>Date: {gameDate} | Host: {hostName} | Transport Supplies Required: <a href={"https://example.com"}>{transportRequired ? "Yes" : "No"}</a></span></p>
        <p><span>Money Collected: ${totalCollected} | TOC+QTOC+Kitty: ${tocPlusKitty} | POT: ${prizePotCalculated}</span></p>
        <div style={this.divStyle}>
          <table>
            <tr>
              <th>Place</th>
              <th>Amount</th>
            </tr>
            {this.renderPayouts(payouts)}
          </table>
        </div>
      </div>
    );
  }
}

export default Details
