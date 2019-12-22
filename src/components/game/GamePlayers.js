import React from 'react'
import './GamePlayers.css'
import store from '../../store'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import {ADD_EXISTING_PLAYER_TO_GAME} from '../../actions/GameActions'
import _ from 'lodash';

class GamePlayers extends React.Component {

  state = {showAddPlayer: false,
    showAddNewPlayer: false,
    showEditPlayer: false,
    gamePlayer: {
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

  renderGamePlayers(gamePlayers) {
    return gamePlayers.map((gamePlayer, index) => {
      const {
        id, firstName, lastName, buyInCollected, rebuyAddOnCollected, annualTocCollected,
        quarterlyTocCollected, points, finish, knockedOut
      } = gamePlayer;
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

  renderPlayers(players, gamePlayers) {
    // Remove players already in game
    const filtered = _.filter(players,
      (p) => {
        let index = _.findIndex(gamePlayers, {"playerId": p.id});
        return index === -1;
      }
    )

    return filtered.map((player, index) => {
      const {
        id, firstName, lastName
      } = player;
      return (
        <option key={id} value={id}>{firstName}{(firstName && lastName) ? ' ' : ''}{lastName}</option>
      )
    })
  }

  addPlayer = (e) => {
    e.preventDefault();
    store.dispatch({type: ADD_EXISTING_PLAYER_TO_GAME, player: {
        id: e.target.elements.playerId.value,
        buyInCollected: e.target.elements.buyInId.checked,
        annualTocCollected: e.target.elements.tocId.checked,
        quarterlyTocCollected: e.target.elements.qtocId.checked,
      }})
  }

  render() {
    const game = this.props.value;
    const {players, gamePlayers} = game;

    return (
      <div>
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
          {this.renderGamePlayers(gamePlayers)}
          </tbody>
        </Table>

        <Modal show={this.state.showAddPlayer} onHide={() => this.toggleModal('showAddPlayer', false)}>
          <Modal.Body>
            <Form onSubmit={this.addPlayer}>
              <Form.Group>
                <Form.Label>Player</Form.Label>
                <Form.Control as="select" id="playerId">
                  {this.renderPlayers(players, gamePlayers)}
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
              <Modal.Footer>
                <Button variant="secondary" onClick={() => this.toggleModal('showAddPlayer', false)}>
                  Cancel
                </Button>
                <Button variant="primary" onClick={() => {
                  //this.publish();
                  this.toggleModal('showAddPlayer', false)
                }} type="submit">
                  Add Player
                </Button>
              </Modal.Footer>
            </Form>
          </Modal.Body>
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
            {this.state.gamePlayer.firstName}
            {(this.state.gamePlayer.firstName && this.state.gamePlayer.lastName) ? ' ' : ''}
            {this.state.gamePlayer.lastName}
            <Form>
              <Form.Check inline
                          type={'checkbox'}
                          id={'buyInId'}
                          label={'Buy-In'}
                          defaultChecked={this.state.gamePlayer.buyInCollected ? true : false}
              />
              <Form.Check inline
                          type={'checkbox'}
                          id={'rebuyId'}
                          label={'Rebuy'}
                          defaultChecked={this.state.gamePlayer.rebuyAddOnCollected ? true : false}
              />
              <Form.Check inline
                          type={'checkbox'}
                          id={'tocId'}
                          label={'Annual TOC'}
                          defaultChecked={this.state.gamePlayer.annualTocCollected ? true : false}
              />
              <Form.Check inline
                          type={'checkbox'}
                          id={'qtocId'}
                          label={'Quarterly TOC'}
                          defaultChecked={this.state.gamePlayer.quarterlyTocCollected ? true : false}
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

export default GamePlayers
