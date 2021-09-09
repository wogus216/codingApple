/* eslint-disable */
import React, { useState } from 'react';
import './App.css';
import logo from './logo.svg';

function App() {
  let [title, setTitle] = useState(['글제목', '오늘 축구', '이기자']);
  let [num, setNum] = useState([0, 2, 0]);
  let [modal, setModal] = useState(false);

  let array = [2, 3, 4];

  let aw = array.map(function (a) {
    return a * 2;
  });

  const up = (index) => {
    let numArray = [...num];
    numArray[index]++;

    setNum(numArray);
  };

  const onChange = () => {
    let newArray = [...title];
    newArray = ['오늘 축구', '파이썬독학', '여자코트 추천'];
    setTitle(newArray);
  };

  let click = () => {
    console.log('나오니??');
    // modal === true ? setModal(false) : setModal(true);
    setModal(!modal);
  };

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <button onClick={onChange}>교체</button>

      {title.map(function (a, index) {
        return (
          <div className="list">
            <h3 onClick={click}>
              {' '}
              {a} <span onClick={() => up(index)}>👍{num[index]}</span>
            </h3>
            <p>날짜</p>
            <hr style={{ border: 'solid' }} />
          </div>
        );
      })}

      {modal === true ? <Modal></Modal> : null}
    </div>
  );
}

//컴포넌트 항상 대문자 시작
function Modal() {
  return (
    <div className="modal">
      <h3>제목</h3>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
