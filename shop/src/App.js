/* eslint-disable-next-line  */

import React, { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import './App.css';
import Data from './data';
import MainPage from './MainPage';

import { Link, Route, Switch } from 'react-router-dom';
import Detail from './Detail';

function App() {
  let [shoes, setShoes] = useState(Data);

  console.log(shoes);
  return (
    <div className="App">
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link to="/">Home</Nav.Link>
            <Nav.Link to="/detail">Detail</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route path="/detail/:id">
          <Detail shoes={shoes} />
        </Route>
      </Switch>
      {/* <Route path="/d" component={Card}></Route> */}
    </div>
  );
}

export default App;
