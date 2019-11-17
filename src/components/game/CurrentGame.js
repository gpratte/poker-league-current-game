import React from 'react'
import Details from './Details'
import Clock from './Clock'
import Players from './Players'
import Seating from './Seating'

class CurrentGame extends React.Component {
  render() {
    return (
      <div>
        <div><Details value={this.props.value}/></div>
        <div><Clock/></div>
        <div><Players value={this.props.value}/></div>
        <div><Seating value={this.props.value}/></div>
      </div>
    );
  }
}

export default CurrentGame
