import React from 'react'
import './Players.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';

class Players extends React.Component {

  state = {showAddPlayer: false,
    showAddNewPlayer: false,
    showEditPlayer: false,
    player: {
      id: 24,
      playerId: 15,
      firstName: 'Josh',
      lastName: 'Bygosh',
      buyInCollected: 40,
      rebuyAddOnCollected: null,
      annualTocCollected: 20,
      quarterlyTocCollected: null,
      chop: null
    },

  };

  toggleModal = (name, value) => {
    const newState = {...this.state};
    newState[name] = value;
    this.setState(newState);
  };

  editPlayer = (id) => {
    const newState = {...this.state};
    // TODO find player in list of players and set the state.player
    newState.showEditPlayer = true;
    this.setState(newState);
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
          <td>
            <Button variant="link" onClick={() => this.editPlayer(id)}>
              {firstName}{(firstName && lastName) ? ' ' : ''}{lastName}
            </Button>
          </td>
          <td>{buyInCollected ? String.fromCharCode(10004) : ''}</td>
          <td>{rebuyAddOnCollected ? String.fromCharCode(10004) : ''}</td>
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

        <Modal show={this.state.showAddPlayer} onHide={() => this.toggleModal('showAddPlayer', false)}>
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
            <Button variant="secondary" onClick={() => this.toggleModal('showAddPlayer', false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={() => this.toggleModal('showAddPlayer', false)}>
              Add Player
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal show={this.state.showAddNewPlayer} onHide={() => this.toggleModal('showAddNewPlayer', false)}>
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
            <Button variant="secondary" onClick={() => this.toggleModal('showAddNewPlayer', false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={() => this.toggleModal('showAddNewPlayer', false)}>
              Add New Player
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal show={this.state.showEditPlayer} onHide={() => this.toggleModal('showEditPlayer', false)}>
          <Modal.Body>
            {this.state.player.firstName}
            <Form>
              <Form.Check inline
                          type={'checkbox'}
                          id={'buyInId'}
                          label={'Buy-In'}
                          checked={this.state.player.buyInCollected ? true : false}
              />
              <Form.Check inline
                          type={'checkbox'}
                          id={'rebuyId'}
                          label={'Rebuy'}
                          checked={this.state.player.rebuyAddOnCollected ? true : false}
              />
              <Form.Check inline
                          type={'checkbox'}
                          id={'tocId'}
                          label={'Annual TOC'}
                          checked={this.state.player.annualTocCollected ? true : false}
              />
              <Form.Check inline
                          type={'checkbox'}
                          id={'qtocId'}
                          label={'Quarterly TOC'}
                          checked={this.state.player.quarterlyTocCollected ? true : false}
              />
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => this.toggleModal('showEditPlayer', false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={() => this.toggleModal('showEditPlayer', false)}>
              Update
            </Button>
          </Modal.Footer>
        </Modal>


        <Button variant="primary" onClick={() => this.toggleModal('showAddPlayer', true)}>
          Add Player
        </Button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Button variant="primary" onClick={() => this.toggleModal('showAddNewPlayer', true)}>
          Add New Player
        </Button>
      </div>
    );
  }
}

export default Players
