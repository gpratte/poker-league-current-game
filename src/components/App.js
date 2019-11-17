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
    payouts: [
      {
        id: 56,
        place: 1,
        amount: 200,
        chopAmount: null,
        chopPercent: null,
      }
    ],
    players: [],
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
