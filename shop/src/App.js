/* eslint-disable-next-line  */

import React, { useState } from 'react';
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap';
import Data from './data';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
import Detail from './Detail';
import axios from 'axios';
import data from './data';

function App() {
  let [shoes, setShoes] = useState(Data);
  let [result, setResult] = useState('');
  let [addshoes, setAddShoes] = useState(false);

  function Product(props) {
    return (
      <div className="col-md-4">
        <img
          src={
            'https://codingapple1.github.io/shop/shoes' + (props.i + 1) + '.jpg'
          }
          alt="shoes"
          width="100%"
        />
        <h4>{props.shoes.title}</h4>
        <p>
          {props.shoes.content}
          <br />
          {props.shoes.price}
        </p>
      </div>
    );
  }

  function Add(props) {
    return (
      <div className="col-md-4">
        <h3>{props.result[0].title}</h3>
      </div>
    );
  }

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/detail">
                Detail
              </Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Switch>
        <Route exact path="/">
          <div className="jumbotron">
            <h1>20% Season Off</h1>
            <p>
              This is a simple hero unit, a simple jumbotron-style component for
              calling extra attention to featured content or information.
            </p>
            <p>
              <Button variant="primary">Learn more</Button>
            </p>
          </div>

          <div className="container">
            <div className="row">
              {shoes.map((a, i) => {
                return <Product shoes={shoes[i]} i={i} key={i} />;
              })}
            </div>
            <button
              className="btn btn-primary"
              onClick={() => {
                //axios ajax요청 axiost json형태를 object 형태로 바꿔준다.
                axios
                  .get('https://codingapple1.github.io/shop/data2.json')
                  .then(() => {
                    setAddShoes(true);
                    setResult(result.data);
                    console.log(result.data);
                  })
                  .catch(() => {
                    console.log('실패');
                  });
              }}
            >
              더보기
            </button>
            {addshoes === true ? <Add result={result} /> : null}
          </div>
        </Route>

        <Route path="/detail/:id">
          <Detail shoes={shoes} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
