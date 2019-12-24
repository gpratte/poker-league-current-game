import React from 'react'
import './GamePlayers.css'
import store from '../../store'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import {
  EDIT_GAME_PLAYER,
  UPDATE_GAME_PLAYER
} from '../../actions/GameActions'
import _ from "lodash";

class EditGamePlayer extends React.Component {

  updatePlayer = (e) => {
    e.preventDefault();
    console.log('id: ' + e.target.elements.gamePlayerId.value);
    store.dispatch({type: UPDATE_GAME_PLAYER, gamePlayer: {
        id: e.target.elements.gamePlayerId.value,
        buyInCollected: e.target.elements.buyInId.checked,
        annualTocCollected: e.target.elements.tocId.checked,
        quarterlyTocCollected: e.target.elements.qtocId.checked,
        rebuyAddOnCollected: e.target.elements.rebuyId.checked,
      }})
  }

  render() {
    const game = this.props.value;
    let gamePlayer = _.find(game.gamePlayers, {'id': game.editGamePlayerId});

    return (
      <div>
        <Modal show={this.props.value.editGamePlayerId !== null} onHide={() => store.dispatch({type: EDIT_GAME_PLAYER, id: null})}>
          <Modal.Body>
            {gamePlayer ? gamePlayer.firstName : ''}
            {gamePlayer ? ((gamePlayer.firstName && gamePlayer.lastName) ? ' ' : '') : ''}
            {gamePlayer ? gamePlayer.lastName : ''}
            <Form onSubmit={this.updatePlayer}>
              <Form.Control type={'hidden'} id={'gamePlayerId'} value={gamePlayer ? gamePlayer.id : 0}/>
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
              <Modal.Footer>
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
