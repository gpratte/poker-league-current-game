import React from 'react';
import './App.css';
import CurrentGame from './game/CurrentGame'

class App extends React.Component {

  game = {
    id: 12345,
    date: 1574003637471,
    hostName: "Bob's your uncle",
    transportRequired: false,
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
    players: [
      {
        id: 24,
        playerId: 15,
        gameId: 3,
        firstName: 'Josh',
        lastName: 'Bygosh',
        points: 42,
        finish: 9,
        knockedOut: true,
        buyInCollected: 40,
        rebuyAddOnCollected: null,
        annualTocCollected: 20,
        quarterlyTocCollected: null,
        chop: null
      },
      {
        id: 23,
        playerId: 14,
        gameId: 3,
        firstName: 'John',
        lastName: 'Yoman',
        points: 35,
        finish: 10,
        knockedOut: true,
        buyInCollected: 40,
        rebuyAddOnCollected: 40,
        annualTocCollected: 20,
        quarterlyTocCollected: 20,
        chop: null
      },
      {
        id: 22,
        playerId: 13,
        gameId: 3,
        firstName: 'Homer',
        lastName: null,
        points: null,
        finish: null,
        knockedOut: null,
        buyInCollected: 40,
        rebuyAddOnCollected: null,
        annualTocCollected: null,
        quarterlyTocCollected: null,
        chop: null
      },
      {
        id: 25,
        playerId: 55,
        gameId: 3,
        firstName: 'Cameron',
        lastName: 'Cantrell',
        points: null,
        finish: null,
        knockedOut: null,
        buyInCollected: 40,
        rebuyAddOnCollected: 40,
        annualTocCollected: 20,
        quarterlyTocCollected: null,
        chop: null
      },
      {
        id: 27,
        playerId: 17,
        gameId: 3,
        firstName: null,
        lastName: 'Kibby',
        points: null,
        finish: null,
        knockedOut: true,
        buyInCollected: 40,
        rebuyAddOnCollected: 40,
        annualTocCollected: null,
        quarterlyTocCollected: null,
        chop: null
      }
    ]
  }

  seating = {
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
      }
    ]
  }

  clock = {
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
}

  render() {
    return (
      <div className="App">
        <CurrentGame value={{game: this.game,
          seating: this.seating,
          clock: this.clock}}/>
      </div>
    );
  }
}

export default App;
