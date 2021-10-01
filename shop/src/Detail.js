/* eslint-disable */

import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import data from './data';
import styled from 'styled-components';
import './Detail.scss';

let Box = styled.div`
  padding: 20px;
`;
let Title = styled.h4`
  font-size: 25px;
  color: ${(props) => props.color};
`;

function Detail(props) {
  const [state, setState] = useState(true);
  const [inputData, setInputData] = useState('');
  console.log(props.stock);
  useEffect(() => {
    console.log('실행 중');
    let timer = setTimeout(() => {
      setState(false);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  let history = useHistory(); // 방문기록을 저장해 놓는 object
  let { id } = useParams();
  let findShoes = props.shoes.find((shoes) => {
    console.log(typeof shoes.id);
    console.log(typeof Number(id));
    return shoes.id === Number(id);
  });

  console.log(findShoes);
  return (
    <div className="container">
      <Box>
        <Title className="red">Detail</Title>
      </Box>
      {inputData}
      <input
        onChange={(e) => {
          setInputData(e.target.value);
        }}
      />
      {state === true ? <Alert /> : null}
      <div className="row">
        <div className="col-md-6">
          <img
            src={'https://codingapple1.github.io/shop/shoes' + id + '.jpg'}
            alt="이미지"
            width="100%"
          />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{findShoes.title}</h4>
          <p>{findShoes.content}</p>
          <p>{findShoes.price}</p>
          {/* <p>재고:{props.stock[id]}</p>
           */}
          <Info stock={props.stock} i={id} />
          <button
            className="btn btn-danger"
            onClick={() => {
              let newStock = [...props.stock];
              newStock[id] -= 1;
              props.setStock(newStock);
            }}
          >
            주문하기
          </button>
          &nbsp;
          <button
            className="btn btn-primary"
            onClick={() => {
              history.goBack();
            }}
          >
            뒤로가기
          </button>
        </div>
      </div>
    </div>
  );
}

function Info(props, i) {
  return <p>재고: {props.stock[props.i]}</p>;
}

function Alert() {
  return (
    <div className="my-alert-red">
      <p>재고가 얼마 남지 않았습니다.</p>{' '}
    </div>
  );
}

export default Detail;
