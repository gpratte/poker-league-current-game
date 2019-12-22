/*
 * action types
 */

export const ADD_EXISTING_PLAYER_TO_GAME = 'ADD_EXISTING_PLAYER_TO_GAME'

/*
 * other constants
 */

/*
 * action creators
 */

export function addPlayer(player) {
  return { type: ADD_EXISTING_PLAYER_TO_GAME, player }
}

