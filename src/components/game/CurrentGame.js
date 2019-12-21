import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import Details from './Details'
import Clock from './Clock'
import Players from './Players'
import PlayersRemaining from './PlayersRemaining'
import Seating from './Seating'

class CurrentGame extends React.Component {
  render() {
    const {game, seating, clock} = this.props.value;
    return (
      <div>
        <Accordion>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                Details
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body><Details value={game}/></Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>

        <Clock value={clock}/>
        <PlayersRemaining value={game}/>
        <Players value={game.players}/>

        <Accordion>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                Seating
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body><Seating value={seating}/></Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>

      </div>
    );
  }
}

export default CurrentGame
