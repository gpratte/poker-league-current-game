import React from 'react'
import './Players.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';

class Players extends React.Component {

  state = {show: false};

  showModal = () => {
    this.setState({show: true});
  };

  hideModal = () => {
    this.setState({show: false});
  };


  renderPlayers(players) {
    return players.map((player, index) => {
      const {
        id, firstName, lastName, buyInCollected, rebuyAddOnCollected, annualTocCollected,
        quarterlyTocCollected, points, finish, knockedOut
      } = player;
      return (
        <tr key={id}>
          <td className="knocked-out">{knockedOut ? 'x' : ''}</td>
          <td>{finish}</td>
          <td>{firstName}{(firstName && lastName) ? <br/> : ''}{lastName}</td>
          <td>{buyInCollected ? buyInCollected : ''}</td>
          <td>{rebuyAddOnCollected ? rebuyAddOnCollected : ''}</td>
          <td>{annualTocCollected ? String.fromCharCode(10004) : ''}</td>
          <td>{quarterlyTocCollected ? String.fromCharCode(10004) : ''}</td>
          <td>{points ? points : ''}</td>
        </tr>
      )
    })
  }

  render() {
    const {paidPlayers, paidPlayersRemaining, averageStack, players} = this.props.value;

    return (
      <div>
        <p><span>Players: {paidPlayersRemaining}/{paidPlayers} | Avg Stack: {averageStack}</span></p>
        <Table striped bordered size="sm">
          <thead>
          <tr>
            <th></th>
            <th>Fin</th>
            <th>Name</th>
            <th>Buy<br/>In</th>
            <th>Re<br/>Buy</th>
            <th>TOC</th>
            <th>QTOC</th>
            <th>Pts</th>
          </tr>
          </thead>
          <tbody>
            {this.renderPlayers(players)}
          </tbody>
        </Table>

        <Modal show={this.state.show} onHide={this.hideModal}>
          <Modal.Header>
            <Modal.Title id="example-custom-modal-styling-title">
              Custom Modal Styling
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.hideModal}>
              Close
            </Button>
            <Button variant="primary" onClick={this.hideModal}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>

        <Button variant="primary" onClick={this.showModal}>
          Launch demo modal
        </Button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Button variant="primary">Add FNG</Button>
      </div>
    );
  }
}

export default Players
