import React, { Component } from 'react';
import { Button, Container } from 'react-bootstrap';

import FormItem from './FormItem';

class Form extends Component {
  state = {
    questions: this.props.questions,
    status: 'disable',
    count: 0,
    right: 0,
  };

  onClick = () => {
    this.setState({ status: 'eneble', count: 0 });
  };

  next = () => {
    this.setState(prev => {
      return { count: prev.count + 1 };
    });
  };

  end = () => {
    this.setState({ status: 'result' });
  };

  isTrue = res => {
    if (!!Number(res) == true) {
      this.setState(prev => {
        return { right: prev.right + 1 };
      });
    }
  };

  status = status => {
    switch (status) {
      case 'eneble':
        return (
          <FormItem
            item={this.state.questions[this.state.count]}
            next={this.next}
            max={this.state.questions.length == this.state.count + 1}
            end={this.end}
            isTrue={this.isTrue}
            number={[this.state.count, this.state.questions.length]}
          />
        );

      case 'disable':
        return (
          <Button variant="outline-secondary" onClick={this.onClick}>
            Start
          </Button>
        );

      case 'result':
        return (
          <Container>
            Right:{' '}{this.state.right}{' '}
            Percentage:{' '}
            {Math.round((this.state.right / this.state.questions.length) * 100)}
            &#37;
            <hr />
            <Button variant="outline-dark" onClick={this.onClick}>
              Restart
            </Button>
          </Container>
        );

      default:
        break;
    }
  };

  render() {
    return <Container>{this.status(this.state.status)}</Container>;
  }
}

export default Form;
