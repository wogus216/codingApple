/* eslint-disable */

import React, { useState } from 'react';
import './App.css';

function App() {
  let posts = '강남 고기 맛집';
  //title 안에 저장 되어 있다.
  let [title, setTitle] = useState(['male court', 'udon', 'hambuger']);
  let [thumb, setThumb] = useState([0, 0, 0]);
  let [numPush, setNumPush] = useState(0);
  let [modal, setModal] = useState(false);
  function plus(num) {
    let newThumb = [...thumb];
    newThumb[num] += 1;
    setThumb(newThumb);
  }
  console.log('thumb', thumb[0]);
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
      {title.map((data, idx) => {
        return (
          <div className="list">
            <h3
              onClick={() => {
                reverse();
                setNumPush(idx);
              }}
              key={idx}
            >
              {data}{' '}
              <span
                onClick={() => {
                  plus(idx);
                }}
              >
                👍
              </span>{' '}
              {thumb[idx]}
            </h3>

            <p>2월17일 발행</p>
            <hr />
          </div>
        );
      })}
      <button
        onClick={() => {
          setNumPush(0);
        }}
      >
        버튼1
      </button>
      <button
        onClick={() => {
          setNumPush(1);
        }}
      >
        버튼2
      </button>
      <button
        onClick={() => {
          setNumPush(2);
        }}
      >
        버튼2
      </button>
      {modal === true ? <Modal title={title} numPush={numPush} /> : null}
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
function Modal(props) {
  return (
    <div>
      <div classNmme="modal">
        <h2>제목: {props.title[props.numPush]}</h2>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
    </div>
  );
}

export default App;
