import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

import Form from '../../components/Form';
import json from './qustion.json';

class TestCPlusPlus extends Component {
  state = {};
  render() {
    return (
      <div>
        <Container style={{ 'margin-top': '70px' }}>
          Тест по С++ <br />
          <Form questions={json} />
        </Container>
      </div>
    );
  }
}

export default TestCPlusPlus;
