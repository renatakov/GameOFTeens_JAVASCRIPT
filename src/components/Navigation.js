import React, { Component } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

class Navigation extends Component {
  state = {};
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand style={{ color: 'red' }}>Language Tests</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse>
            <Nav>
              <Nav.Link>
                <Link style={{ color: 'red' }} to="/">
                  Главная
                </Link>
              </Nav.Link>
              {/* <Nav.Link>
                <Link style={{color: 'red'}} to="/tests">Tests</Link>
              </Nav.Link> */}
              <Nav.Link>
                <Link style={{ color: 'red' }} to="/testhtmlcss">
                  Тест Html/Css
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link style={{ color: 'red' }} to="/testjavascript">
                  Тест JavaScript
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link style={{ color: 'red' }} to="/testcplusplus">
                  Тест C++
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Navigation;
