import React, { Component } from "react";
import { Container } from "react-bootstrap";

class TestJavascript extends Component {
  state = {};
  render() {
    return (
      <div>
        <Container style={{ "margin-top": "70px" }}>
           Тест по JavaScript <br />
        </Container>
      </div>
    );
  }
}

export default TestJavascript;