/* eslint-disable */

import React, { useState } from 'react';
import './App.css';

function App() {
  let posts = '강남 고기 맛집';
  //title 안에 저장 되어 있다.
  let [title, setTitle] = useState(['male court', 'udon', 'hambuger']);
  let [num, setNum] = useState(0);

  let [modal, setModal] = useState(false);
  function plus() {
    setNum(num + 1);
  }
  function reverse() {
    setModal(!modal);
  }
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <button
        onClick={() => {
          let newTitle = [...title];
          newTitle[0] = 'femail court';
          setTitle(newTitle);
        }}
      >
        button
      </button>
      <div className="list">
        <h3>
          {title[0]} <span onClick={plus}>👍</span> {num}
        </h3>
        <p>2월17일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3>{title[1]}</h3>
        <p>2월17일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3 onClick={reverse}>{title[2]}</h3>
        <p>2월17일 발행</p>
        <hr />
      </div>

      {modal === true ? <Modal /> : null}
    </div>
  );
}
//컴포넌트 만들 때 1.이름 대문자 2.소괄호 안에 담기
//만드는 기준 반복적으로 출연하는 친구들

// function Title(){
//   return(
//     <div className="list">
//     <h3>{title[2]}</h3>
//     <p>2월17일 발행</p>
//     <hr />
//   </div>
//   )
// }
function Modal() {
  return (
    <div>
      <div classNmme="modal">
        <h2>제목</h2>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
    </div>
  );
}

export default App;
