import {
  ADD_PLAYER
} from '../actions/GameActions'

// Take the game as the parameter
function reducer(state, action) {
  switch (action.type) {
    case ADD_PLAYER:
      let newGame = Object.assign({}, state);
      newGame.players.push(action.player);
      return newGame;
    default:
      return state
  }
}

export default reducer
