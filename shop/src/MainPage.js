import Card from './jumbotron';
import { Button } from 'react-bootstrap';
import shoes from './data';
import axios from 'axios';
import React, { useState } from 'react';
import { stockContext } from './App';

export default function Main(props) {
  const [load, setLoad] = useState(false);
  return (
    <>
      <div className="jumbotron">
        <h1 className="display-4">50% 시즌 오픈</h1>
        <p className="lead">
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <p>
          It uses utility classes for typography and spacing to space content
          out within the larger container.
        </p>
        <p>
          <Button variant="primary">Learn more</Button>{' '}
        </p>
      </div>

      <div className="container">
        <stockContext.Provider value={props.stock}>
          <div className="row">
            {props.shoes.map((a, i) => {
              return <Card shoes={props.shoes[i]} i={i} key={i} />;
            })}
          </div>
        </stockContext.Provider>
        <button
          className="btn btn-primary"
          onClick={() => {
            setLoad(true);
            axios
              .get('https://codingapple1.github.io/shop/data2.json')
              .then((result) => {
                setLoad(false);
                console.log('result.data', result.data);
                let addShoes = [...shoes, ...result.data];
                props.setShoes(addShoes);
              })
              .catch(() => {
                setLoad(false);
                console.log('실패했어요');
              });
          }}
        >
          더보기
        </button>
        {load === true ? <Loading /> : null}
      </div>
    </>
  );

  function Loading() {
    return <h3>로딩 중</h3>;
  }
}
