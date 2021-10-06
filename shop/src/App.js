/* eslint-disable  */

import React, { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import './App.css';
import Data from './data';
import MainPage from './MainPage';

import { Link, Route, Switch } from 'react-router-dom';
import Detail from './Detail';
import axios from 'axios';
import Cart from './Cart';

export let stockContext = React.createContext();

function App() {
  let [shoes, setShoes] = useState(Data);
  let [stock, setStock] = useState([10, 11, 12]);

  // const getAddshoes = (shoes) => {
  //   return setShoes(shoes);
  // };

  console.log(shoes);
  return (
    <div className="App">
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/detail">
              Detail
            </Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Switch>
        <Route exact path="/">
          <MainPage setShoes={setShoes} shoes={shoes} stock={stock} />
        </Route>
        <Route path="/detail/:id">
          <Detail shoes={shoes} stock={stock} setStock={setStock} />
        </Route>

        <Route path="/Cart">
          <Cart></Cart>
        </Route>
      </Switch>
      {/* <Route path="/d" component={Card}></Route> */}
    </div>
  );
}

export default App;
