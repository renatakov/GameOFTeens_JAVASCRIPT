import React, { Component } from "react";
import { Container } from "react-bootstrap";

import Form from '../../components/Form';
import json from './testhtmlcss.json';

class TestHtmlCss extends Component {
  state = {};
  render() {
    return (
      <div>
        <Container style={{ "margin-top": "70px" }}>
           Тест по HTML/CSS <br />
           <Form questions={json} />
        </Container>
      </div>
    );
  }
}

export default TestHtmlCss;