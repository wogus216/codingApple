/* eslint-disable  */

import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import './App.css';
import Data from './data';
import MainPage from './MainPage';

import { Link, Route, Switch } from 'react-router-dom';
// import Detail from './Detail';
let Detail = lazy(() => {
  return import('./Detail.js');
});
import axios from 'axios';
import Cart from './Cart';

export let stockContext = React.createContext();

function App() {
  let [shoes, setShoes] = useState(Data);
  let [stock, setStock] = useState([10, 11, 12]);
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(20);

  // const getAddshoes = (shoes) => {
  //   return setShoes(shoes);
  // };
  useEffect(() => {
    if (count !== 0 && count < 3) {
      setAge(age + 1);
    }
  }, [count]);

  function work() {
    return count < 3 ? setCount(count + 1) : console.log('3를 넘었습니다.');
  }
  console.log(shoes);
  return (
    <div className="App">
      <div>안녕하십니까? 전 {age}</div>
      <button onClick={work}>누르면 한살 먹기{count}</button>
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
          <Suspense fallback={<div>로딩중이에요</div>}>
            <Detail shoes={shoes} stock={stock} setStock={setStock} />
          </Suspense>
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
