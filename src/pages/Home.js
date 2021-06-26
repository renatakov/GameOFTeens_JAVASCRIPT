import React, { Component } from "react";
import { Container } from "react-bootstrap";

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <Container style={{ "margin-top": "70px" }}>
          тут будет текст про тести, краткое описание что ето <br />
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita
          voluptas libero doloribus, quia ipsam ut ad maxime. Id, eius odit,
          molestias quis, impedit nam molestiae quisquam dolorem ducimus
          reprehenderit eaque? Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Amet, deserunt! Suscipit enim deleniti quidem
          dignissimos inventore iusto quaerat autem ut eum debitis vero est,
          fugit, ipsa iste. Recusandae, impedit accusantium!
        </Container>
      </div>
    );
  }
}

export default Home;
