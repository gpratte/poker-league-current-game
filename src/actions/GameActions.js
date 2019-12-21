/*
 * action types
 */

export const ADD_PLAYER = 'ADD_PLAYER'

/*
 * other constants
 */

/*
 * action creators
 */

export function addPlayer(player) {
  return { type: ADD_PLAYER, player }
}

