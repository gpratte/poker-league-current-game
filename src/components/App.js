import './App.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CurrentGameConnector from '../connectors/CurrentGameConnector'

class App extends React.Component {

  render() {
    return (
      <Container>
        <Row className="justify-content-center text-center">
          <Col>
            <CurrentGameConnector/>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
