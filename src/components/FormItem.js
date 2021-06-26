import React, { Component } from 'react';
import { Button, Container, ButtonGroup } from 'react-bootstrap';

class FormItem extends Component {
  onChnge = e => {
    this.props.isTrue(e.target.value);
    if (!this.props.max) {
      this.props.next();
    } else {
      this.props.end();
    }
  };

  render() {
    return (
      <div>
        {this.props.number[0]}/{this.props.number[1]}
        <span> </span>
        {this.props.item.question}
        <hr />
        <ButtonGroup vertical>
          {this.props.item.answers.map((elem, i) => {
            return (
              <Button
                onClick={this.onChnge}
                value={Number(elem.right)}
                variant="outline-dark"
                key={i}
              >
                {elem.answer}
              </Button>
            );
          })}
        </ButtonGroup>
        <hr />
      </div>
    );
  }
}

export default FormItem;
