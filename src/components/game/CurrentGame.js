import React from 'react'
import Details from './Details'
import Clock from './Clock'
import Players from './Players'
import Seating from './Seating'

const CurrentGame = ({ game }) => (
  <div>
    <div><Details/></div>
    <div><Clock/></div>
    <div><Players/></div>
    <div><Seating/></div>
  </div>
)

export default CurrentGame
