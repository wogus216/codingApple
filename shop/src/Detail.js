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

let dis = styled.div`
  display: none;
`;

function Detail(props) {
  let [alert, setAlert] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setAlert(!alert);
    }, 2000);
  });
  let { id } = useParams();
  let findProduct = props.shoes.find(function (shoe) {
    return shoe.id == id;
  });
  let history = useHistory();

  return (
    <div className="container">
      <Box>
        <Name className="red">상세페이지</Name>
      </Box>
      {alert === true ? <Alert /> : null}
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
          <button className="btn btn-danger">주문하기</button>
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

export default Detail;
