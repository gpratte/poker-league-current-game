import {createStore} from 'redux'
import reducer from './reducers/GameReducers'

const game = {
  id: 12345,
  date: 1574003637471,
  hostName: "Bob's your uncle",
  transportRequired: false,
  buyInCost: 40,
  rebuyAddOnCost: 40,
  annualTocCost: 20,
  quarterlyTocCost: 20,
  totalCollected: 1600,
  totalCombinedTocCalculated: 300,
  kittyCalculated: 10,
  prizePotCalculated: 770,
  paidPlayers: 20,
  paidPlayersRemaining: 18,
  averageStack: 85220,
  clockId: 234,
  payouts: [
    {
      id: 56,
      place: 1,
      amount: 200,
      chopAmount: null,
      chopPercent: null,
    }
  ],
  gamePlayers: [],
  players: [
    {
      id: 1,
      firstName: 'Josh',
      lastName: 'Bygosh',
    },
    {
      id: 2,
      firstName: 'John',
      lastName: 'Yoman',
    },
    {
      id: 3,
      firstName: 'Homer',
      lastName: null,
    },
    {
      id: 4,
      firstName: 'Cameron',
      lastName: 'Cantrell',
    },
    {
      id: 5,
      firstName: null,
      lastName: 'Kibby',
    }
  ],
  seating: {
    id: 12345,
    gameId: 435,
    numTables: 2,
    numSeatPerTable: 8,
    seatRequests: [
      {
        id: 1,
        playerId: 11,
        playerName: 'John Turnberry',
        tableNum: 1
      },
      {
        id: 2,
        playerId: 12,
        playerName: 'John Blurr',
        tableNum: 1
      }
    ],
    tables: [
      {
        number: 1,
        seats: [
          {
            tableNumber: 1,
            seatNumber: 1,
            gamePlayerName: 'John Doe'
          },
          {
            tableNumber: 1,
            seatNumber: 3,
            gamePlayerName: 'John Bubble'
          },
          {
            tableNumber: 1,
            seatNumber: 5,
            gamePlayerName: 'John Spritz'
          }
        ]
      },
      {
        number: 2,
        seats: [
          {
            tableNumber: 2,
            seatNumber: 1,
            gamePlayerName: 'Rich Molah'
          },
          {
            tableNumber: 2,
            seatNumber: 3,
            gamePlayerName: 'Rich Dollar'
          },
          {
            tableNumber: 2,
            seatNumber: 5,
            gamePlayerName: 'Rich Cashola'
          }
        ]
      }
    ]
  },
  clock: {
    clockId: 1,
    minutes: 18,
    seconds: 23,
    playing: true,
    thisRound: {
      round: 'Round 4',
      smallBlind: 100,
      bigBlind: 200,
      ante: 0
    },
    nextRound: {
      round: 'Round 5',
      smallBlind: 100,
      bigBlind: 200,
      ante: 100
    }
  },
  showAddExistingPlayer: false,
  editGamePlayerId: null
}


const store = createStore(reducer, game);

export default store;
