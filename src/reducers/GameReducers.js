import {
  ADD_EXISTING_PLAYER_TO_GAME
} from '../actions/GameActions'
import _ from 'lodash';


// Take the game as the parameter
function reducer(state, action) {
  switch (action.type) {
    case ADD_EXISTING_PLAYER_TO_GAME:
      // Find the player in the list of all the league players
      const game = state;
      const {buyInCost, annualTocCost, quarterlyTocCost} = game;

      // Make sure its a primitive
      const playerId = parseInt('' + action.player.id);

      // Pretend this is a game player
      let player = _.find(game.players, {'id': playerId});
      player = Object.assign({}, player);
      player['playerId'] = playerId;
      player['buyInCollected'] = action.player.buyInCollected ? buyInCost : null;
      player['annualTocCollected'] = action.player.annualTocCollected ? annualTocCost : null;
      player['quarterlyTocCollected'] = action.player.quarterlyTocCollected ? quarterlyTocCost : null;

      let newGame = Object.assign({}, state);
      newGame.gamePlayers.push(player);
      return newGame;
    default:
      return state
  }
}

export default reducer
