import React, { Component } from "react";
import { Container } from "react-bootstrap";

class TestHtmlCss extends Component {
  state = {};
  render() {
    return (
      <div>
        <Container style={{ "margin-top": "70px" }}>
           Тест по HTML/CSS <br />
        </Container>
      </div>
    );
  }
}

export default TestHtmlCss;