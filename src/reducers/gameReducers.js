import {
  ADD_PLAYER
} from './../actions/gameActions'

// Take the game as the parameter?
function players(state = [], action) {
  switch (action.type) {
    // Call add player and then get game
    case ADD_PLAYER:
      return [
        ...state,
        {
          player: action.player
        }
      ]
    default:
      return state
  }
}

export default players
