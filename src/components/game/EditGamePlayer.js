import React from 'react'
import './GamePlayers.css'
import store from '../../store'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import {
  EDIT_GAME_PLAYER,
  UPDATE_GAME_PLAYER,
  DELETE_GAME_PLAYER
} from '../../actions/GameActions'
import _ from "lodash";

const tenPlaces = [10,9,8,7,6,5,4,3,2,1]

class EditGamePlayer extends React.Component {

  renderPlaces(gamePlayers, gamePlayerFinish) {
    return tenPlaces.map((place) => {
      return (
        <option key={place} value={place}>{place}</option>
      )
    })
  }

  updatePlayer = (e) => {
    e.preventDefault();
    store.dispatch({type: UPDATE_GAME_PLAYER, gamePlayer: {
        id: e.target.elements.gamePlayerId.value,
        buyInCollected: e.target.elements.buyInId.checked,
        annualTocCollected: e.target.elements.tocId.checked,
        quarterlyTocCollected: e.target.elements.qtocId.checked,
        rebuyAddOnCollected: e.target.elements.rebuyId.checked,
        knockedOut: e.target.elements.knockedOutId.checked,
        finish: e.target.elements.finishId.value,
        chop: e.target.elements.chopId.value,
      }})
  }

  render() {
    const game = this.props.value;
    let gamePlayer = _.find(game.gamePlayers, {'id': game.editGamePlayerId});
    const finished = gamePlayer ? gamePlayer.finish : 11

    return (
      <div>
        <Modal show={this.props.value.editGamePlayerId !== null} onHide={() => store.dispatch({type: EDIT_GAME_PLAYER, id: null})}>
          <Modal.Body>
            <p className="text-center">
              {gamePlayer ? gamePlayer.firstName : ''}
              {gamePlayer ? ((gamePlayer.firstName && gamePlayer.lastName) ? ' ' : '') : ''}
              {gamePlayer ? gamePlayer.lastName : ''}
            </p>
            <Form onSubmit={this.updatePlayer}>
              <Form.Control type={'hidden'} id={'gamePlayerId'} value={gamePlayer ? gamePlayer.id : 0}/>
              <Form.Group>
                <Form.Check inline
                            type={'checkbox'}
                            id={'buyInId'}
                            label={'Buy-In'}
                            defaultChecked={gamePlayer ? (gamePlayer.buyInCollected ? true : false) : false}
                />
                <Form.Check inline
                            type={'checkbox'}
                            id={'rebuyId'}
                            label={'Rebuy'}
                            defaultChecked={gamePlayer ? (gamePlayer.rebuyAddOnCollected ? true : false) : false}
                />
                <Form.Check inline
                            type={'checkbox'}
                            id={'tocId'}
                            label={'Annual TOC'}
                            defaultChecked={gamePlayer ? (gamePlayer.annualTocCollected ? true : false) : false}
                />
                <Form.Check inline
                            type={'checkbox'}
                            id={'qtocId'}
                            label={'Quarterly TOC'}
                            defaultChecked={gamePlayer ? (gamePlayer.quarterlyTocCollected ? true : false) : false}
                />
              </Form.Group>
              <Form.Group>
                <Form.Check inline
                            type={'checkbox'}
                            id={'knockedOutId'}
                            label={'Knocked-Out'}
                            defaultChecked={gamePlayer ? (gamePlayer.knockedOut ? true : false) : false}
                />
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label>&nbsp;&nbsp;Place</Form.Label>
                <Col>
                  <Form.Control as="select" defaultValue={finished} id="finishId">
                    <option key={11} value={11}> </option>
                    {this.renderPlaces(game.gamePlayers)}
                  </Form.Control>
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label>&nbsp;&nbsp;Chop</Form.Label>
                <Col>
                  <Form.Control as="input" defaultValue={gamePlayer ? gamePlayer.chop : ''} id="chopId"/>
                </Col>
              </Form.Group>
              <Modal.Footer>
                <Button variant="danger" className='mr-auto' onClick={() => {
                  // eslint-disable-next-line no-restricted-globals
                  const doit = confirm('are you sure?');
                  if (doit) {
                    store.dispatch({type: DELETE_GAME_PLAYER, id: gamePlayer ? gamePlayer.id : 0})
                  }
                }}>
                  Delete
                </Button>
                <Button variant="secondary" onClick={() => {
                  store.dispatch({type: EDIT_GAME_PLAYER, id: null})
                }}>
                  Cancel
                </Button>
                <Button variant="primary" type="submit">
                  Update Player
                </Button>
              </Modal.Footer>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default EditGamePlayer
