import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import data from './data';

function Detail(props) {
  let history = useHistory(); // 방문기록을 저장해 놓는 object
  let { id } = useParams();
  let findShoes = props.shoes.find((shoes) => {
    return shoes.id == id;
  });
  let 찾은상품 = props.shoes.find(function (상품) {
    return 상품.id == id;
  });

  console.log(findShoes);
  return (
    <div className="container">
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
          <p>{props.shoes[id].content}</p>
          <p>{props.shoes[id].price}</p>
          <button className="btn btn-danger">주문하기</button>
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

export default Detail;
