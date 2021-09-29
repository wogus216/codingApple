import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router';
import styled from 'styled-components';
import './Detail.scss';

let Box = styled.div`
  padding: 20px;
`;

let Name = styled.h4`
  font-size: 25px;
  color: ${(props) => props.color};
`;

function Detail(props) {
  let [alert, setAlert] = useState(true);
  let [state, setState] = useState('');
  useEffect(() => {
    let timer = setTimeout(() => {
      setAlert(false);
    }, 2000);
    console.log('안녕');
    return () => {
      clearTimeout(timer);
    };
  }, [alert]);
  let { id } = useParams();
  let findProduct = props.shoes.find(function (shoe) {
    return shoe.id === id;
  });
  let history = useHistory();

  return (
    <div className="container">
      <Box>
        <Name className="red">상세페이지</Name>
      </Box>
      {alert === true ? <Alert /> : null}

      {state}
      <input
        onChange={(e) => {
          setState(e.target.value);
        }}
      />
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://codingapple1.github.io/shop/shoes1.jpg"
            alt="신발사진"
            width="100%"
          />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{findProduct.title}</h4>
          <p>{findProduct.content}</p>
          <p>{findProduct.price}</p>

          <Info stock={props.stock} />
          <button
            className="btn btn-danger"
            onClick={() => {
              let newStock = [...props.stock];
              newStock = [9, 11, 12];
              props.setStock(newStock);
            }}
          >
            주문하기
          </button>
          <br />
          <button
            className="btn btn-danger"
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

function Alert() {
  return (
    <div className="my-alert">
      <p>재고가 얼마 남지 않았습니다.</p>
    </div>
  );
}

function Info(props) {
  return <p>재고 : {props.stock[0]} </p>;
}

export default Detail;
