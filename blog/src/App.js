/* eslint-disable */
import React, { useState } from 'react';
import './App.css';
import logo from './logo.svg';

function App() {
  let [title, setTitle] = useState(['남자코트추천', '오늘 축구', '이기자']);
  let [num, setNum] = useState([0, 2, 3]);
  let [modal, setModal] = useState(false);
  let [titleNumber, setTitleNumber] = useState(0);

  const appear = () => {
    setModal(!modal);
  };
  let array = [1, 2, 3];

  let na = array.map((a) => a * 2);
  console.log(na);

  const up = (index) => {
    console.log('anjwl');
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

      {title.map((a, i) => {
        return (
          <div className="list">
            <h3
              onClick={() => {
                setTitleNumber(i);
              }}
            >
              {a}
            </h3>
            <span onClick={() => up(i)}>👍{num[i]}</span>

            <p>2 월 19일 발행</p>
            <hr />
          </div>
        );
      })}

      {/* <button
        onClick={() => {
          setTitleNumber(0);
        }}
      >
        버튼1
      </button>
      <button
        onClick={() => {
          setTitleNumber(1);
        }}
      >
        버튼2
      </button>
      <button
        onClick={() => {
          setTitleNumber(2);
        }}
      >
        버튼3
      </button> */}
      <button onClick={appear}>열고 닫기</button>
      {modal === true ? (
        <Modal title={title} titleNumber={titleNumber}></Modal>
      ) : null}
    </div>
  );
}

//컴포넌트 항상 대문자 시작
function Modal(props) {
  return (
    <div className="modal">
      <h3>{props.title[props.titleNumber]}</h3>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
