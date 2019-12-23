/*
 * action types
 */

export const ADD_EXISTING_PLAYER_TO_GAME = 'ADD_EXISTING_PLAYER_TO_GAME'
export const TOGGLE_ADD_EXISTING_PLAYER_TO_GAME = 'TOGGLE_ADD_EXISTING_PLAYER_TO_GAME'

/*
 * other constants
 */

/*
 * action creators
 */

export function addPlayer(player) {
  return { type: ADD_EXISTING_PLAYER_TO_GAME, player }
}
export function toggleAddExistingPlayerToGame(flag) {
  return { type: TOGGLE_ADD_EXISTING_PLAYER_TO_GAME, flag }
}

