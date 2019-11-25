import React from 'react'
import Details from './Details'
import Clock from './Clock'
import Players from './Players'
import Seating from './Seating'

class CurrentGame extends React.Component {
  render() {
    const {game, seating, clock} = this.props.value;
    return (
      <div>
        <div><Details value={game}/></div>
        <div><Clock value={clock}/></div>
        <div><Players value={game}/></div>
        <div><Seating value={seating}/></div>
      </div>
    );
  }
}

export default CurrentGame
