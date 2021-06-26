import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <Container fluid="md" style={{ 'margin-top': '70px' }}>
          <Row className="justify-content-md-center">
            <Col md="auto">
              {' '}
              Цей тест допооможе вам зрозуміти на який курс варто обрати. Не
              варто хвилюватися якщо ваша улюблена справа не сходитьсяз
              результатом теста, оскільки тес не може бути повністю обєктивним
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home;
