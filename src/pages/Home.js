import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <Container
          style={{
            'margin-top': '70px',
          }}
        >
          Тут будет текст про тести, краткое описание что это <br />
          На нашем сайте вы можете протестировать свои знания C++, JavaScript и
          HTML/CSS и, возможно, узнать что-то новое для себя
          <br />
          Улучшайте свои знания и навыки!
        </Container>
      </div>
    );
  }
}

export default Home;
