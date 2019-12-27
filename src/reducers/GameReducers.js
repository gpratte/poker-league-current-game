import {
  TOGGLE_ADD_EXISTING_PLAYER_TO_GAME,
  TOGGLE_ADD_NEW_PLAYER_TO_GAME,
  TOGGLE_CONFIGURE_SEATING,
  ADD_EXISTING_PLAYER_TO_GAME,
  ADD_NEW_PLAYER_TO_GAME,
  EDIT_GAME_PLAYER,
  UPDATE_GAME_PLAYER,
  DELETE_GAME_PLAYER, ENABLE_SEATING_AT_TABLE
} from '../actions/GameActions'
import _ from 'lodash';

// Take the game as the parameter
function reducer(game, action) {
  switch (action.type) {
    case TOGGLE_ADD_EXISTING_PLAYER_TO_GAME:
      return Object.assign({}, game, {showAddExistingPlayer: action.show});
    case TOGGLE_ADD_NEW_PLAYER_TO_GAME:
      return Object.assign({}, game, {showAddNewPlayer: action.show});
    case TOGGLE_CONFIGURE_SEATING:
      return Object.assign({}, game, {showConfigureSeating: action.show});
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
    case ADD_NEW_PLAYER_TO_GAME:
      let newPlayer = action.player;
      newPlayer['id'] = new Date().getTime();
      newPlayer['buyInCollected'] = action.player.buyInCollected ? game.buyInCost : null;
      newPlayer['annualTocCollected'] = action.player.annualTocCollected ? game.annualTocCost : null;
      newPlayer['quarterlyTocCollected'] = action.player.quarterlyTocCollected ? game.quarterlyTocCost : null;

      let gameWithNewPlayer = Object.assign({}, game, {showAddNewPlayer: false});
      gameWithNewPlayer.gamePlayers.push(newPlayer);
      return gameWithNewPlayer;
    case EDIT_GAME_PLAYER:
      return Object.assign({}, game, {editGamePlayerId: action.id});
    case UPDATE_GAME_PLAYER:
      let gameWithUpdatedPlayer = Object.assign({}, game, {editGamePlayerId: null});

      // Make sure its a primitive
      const gamePlayerId = parseInt('' + action.gamePlayer.id);
      const finish = parseInt('' + action.gamePlayer.finish);

      const indexOfGamePlayer = _.findIndex(gameWithUpdatedPlayer.gamePlayers, { 'id': gamePlayerId });
      const gamePlayerToUpdate = gameWithUpdatedPlayer.gamePlayers[indexOfGamePlayer];
      gamePlayerToUpdate['buyInCollected'] = action.gamePlayer.buyInCollected ? game.buyInCost : null;
      gamePlayerToUpdate['annualTocCollected'] = action.gamePlayer.annualTocCollected ? game.annualTocCost : null;
      gamePlayerToUpdate['quarterlyTocCollected'] = action.gamePlayer.quarterlyTocCollected ? game.quarterlyTocCost : null;
      gamePlayerToUpdate['rebuyAddOnCollected'] = action.gamePlayer.rebuyAddOnCollected ? game.quarterlyTocCost : null;
      gamePlayerToUpdate['knockedOut'] = action.gamePlayer.knockedOut;
      gamePlayerToUpdate['finish'] = finish === 11 ? null : finish;
      gamePlayerToUpdate['chop'] = action.gamePlayer.chop ? parseInt('' + action.gamePlayer.chop) : null;
      return gameWithUpdatedPlayer;
    case DELETE_GAME_PLAYER:
      let gameWithDeletedPlayer = Object.assign({}, game, {editGamePlayerId: null});
      _.remove(gameWithDeletedPlayer.gamePlayers, function(gp) {
        return gp.id === action.id;
      });
      return gameWithDeletedPlayer;
    case ENABLE_SEATING_AT_TABLE:
      return Object.assign({}, game, {playerRequestTable: true});
    default:
      return game;
  }
}

export default reducer
