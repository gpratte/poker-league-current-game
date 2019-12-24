import {
  ADD_EXISTING_PLAYER_TO_GAME,
  TOGGLE_ADD_EXISTING_PLAYER_TO_GAME,
  EDIT_GAME_PLAYER,
  UPDATE_GAME_PLAYER
} from '../actions/GameActions'
import _ from 'lodash';

// Take the game as the parameter
function reducer(game, action) {
  switch (action.type) {
    case ADD_EXISTING_PLAYER_TO_GAME:
      // Make sure its a primitive
      const playerId = parseInt('' + action.player.id);

      // Find the player in the list of all the league players
      let player = _.find(game.players, {'id': playerId});
      player = Object.assign({}, player);
      player['playerId'] = playerId;
      player['buyInCollected'] = action.player.buyInCollected ? game.buyInCost : null;
      player['annualTocCollected'] = action.player.annualTocCollected ? game.annualTocCost : null;
      player['quarterlyTocCollected'] = action.player.quarterlyTocCollected ? game.quarterlyTocCost : null;

      let gameWithAddedPlayer = Object.assign({}, game, {showAddExistingPlayer: false});
      gameWithAddedPlayer.gamePlayers.push(player);
      return gameWithAddedPlayer;
    case TOGGLE_ADD_EXISTING_PLAYER_TO_GAME:
      return Object.assign({}, game, {showAddExistingPlayer: action.show});
    case EDIT_GAME_PLAYER:
      return Object.assign({}, game, {editGamePlayerId: action.id});
    case UPDATE_GAME_PLAYER:
      let gameWithUpdatedPlayer = Object.assign({}, game, {editGamePlayerId: null});

      // Make sure its a primitive
      const gamePlayerId = parseInt('' + action.gamePlayer.id);

      const indexOfGamePlayer = _.findIndex(gameWithUpdatedPlayer.gamePlayers, { 'id': gamePlayerId });
      const gamePlayerToUpdate = gameWithUpdatedPlayer.gamePlayers[indexOfGamePlayer];
      gamePlayerToUpdate['buyInCollected'] = action.gamePlayer.buyInCollected ? game.buyInCost : null;
      gamePlayerToUpdate['annualTocCollected'] = action.gamePlayer.annualTocCollected ? game.annualTocCost : null;
      gamePlayerToUpdate['quarterlyTocCollected'] = action.gamePlayer.quarterlyTocCollected ? game.quarterlyTocCost : null;
      gamePlayerToUpdate['rebuyAddOnCollected'] = action.gamePlayer.rebuyAddOnCollected ? game.quarterlyTocCost : null;
      return gameWithUpdatedPlayer;
    default:
      return game;
  }
}

export default reducer
