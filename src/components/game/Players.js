import React from 'react'
import './Players.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';

class Players extends React.Component {

  state = {showAddPlayer: false, showAddNewPlayer: false};

  showAddPlayerModal = () => {
    this.setState({showAddPlayer: true, showAddNewPlayer: false});
  };
  hideAddPlayerModal = () => {
    this.setState({showAddPlayer: false, showAddNewPlayer: false});
  };

  showAddNewPlayerModal = () => {
    this.setState({showAddPlayer: false, showAddNewPlayer: true});
  };
  hideAddNewPlayerModal = () => {
    this.setState({showAddPlayer: false, showAddNewPlayer: false});
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

        <Modal show={this.state.showAddPlayer} onHide={this.hideAddPlayerModal}>
          <Modal.Body>
            <Form>
              <Form.Group controlId="addPlayerId">
                <Form.Label>Player</Form.Label>
                <Form.Control as="select">
                  <option>Abe Adams</option>
                  <option>Bjorn Biffel</option>
                  <option>Cameron Case</option>
                </Form.Control>
              </Form.Group>
              <Form.Check inline
                          type={'checkbox'}
                          id={'buyInId'}
                          label={'Buy-In'}
              />
              <Form.Check inline
                          type={'checkbox'}
                          id={'tocId'}
                          label={'Annual TOC'}
              />
              <Form.Check inline
                          type={'checkbox'}
                          id={'qtocId'}
                          label={'Quarterly TOC'}
              />
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.hideAddPlayerModal}>
              Cancel
            </Button>
            <Button variant="primary" onClick={this.hideAddPlayerModal}>
              Add Player
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal show={this.state.showAddNewPlayer} onHide={this.hideAddNewPlayerModal}>
          <Modal.Body>
            <Form>
              <Form.Group controlId="nameId">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="First" />
                <Form.Control type="text" placeholder="Last" />
              </Form.Group>
              <Form.Group controlId="emailId">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  Needed to login
                </Form.Text>
              </Form.Group>
              <Form.Check inline
                          type={'checkbox'}
                          id={'buyInId'}
                          label={'Buy-In'}
              />
              <Form.Check inline
                          type={'checkbox'}
                          id={'tocId'}
                          label={'Annual TOC'}
              />
              <Form.Check inline
                          type={'checkbox'}
                          id={'qtocId'}
                          label={'Quarterly TOC'}
              />
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.hideAddNewPlayerModal}>
              Cancel
            </Button>
            <Button variant="primary" onClick={this.hideAddNewPlayerModal}>
              Add New Player
            </Button>
          </Modal.Footer>
        </Modal>

        <Button variant="primary" onClick={this.showAddPlayerModal}>
          Add Player
        </Button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Button variant="primary" onClick={this.showAddNewPlayerModal}>
          Add New Player
        </Button>
      </div>
    );
  }
}

export default Players
