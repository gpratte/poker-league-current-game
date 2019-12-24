/*
 * action types
 */

export const ADD_EXISTING_PLAYER_TO_GAME = 'ADD_EXISTING_PLAYER_TO_GAME'
export const TOGGLE_ADD_EXISTING_PLAYER_TO_GAME = 'TOGGLE_ADD_EXISTING_PLAYER_TO_GAME'
export const EDIT_GAME_PLAYER = 'EDIT_GAME_PLAYER'
export const UPDATE_GAME_PLAYER = 'UPDATE_GAME_PLAYER'

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
export function editGamePlayer(id) {
  return { type: EDIT_GAME_PLAYER, id }
}
export function updateGamePlayer(player) {
  return { type: UPDATE_GAME_PLAYER, player }
}

