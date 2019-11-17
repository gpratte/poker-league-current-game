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
    ],
    tables: []
  }

  render() {
    return (
      <div className="App">
        <CurrentGame value={this.game}/>
      </div>
    );
  }
}

export default App;
