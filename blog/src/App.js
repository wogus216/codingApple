/* eslint-disable */
import React, { useState } from 'react';
import './App.css';
import logo from './logo.svg';

function App() {
  let hi = '안녕하세요';
  let [title, setTitle] = useState([
    '남자코트 추천',
    '마포추천 맛집',
    '마포우동 맛집',
    '테스트',
  ]);
  let [cnt, setCnt] = useState([0, 2, 0]);
  let [modal, setModal] = useState(false);

  let appear = () => {
    setModal(!modal);
  };

  let up = (index) => {
    let newCnt = [...cnt];
    newCnt[index]++;
    setCnt(newCnt);
  };
  let change = () => {
    let newTitle = [...title];
    newTitle[0] = '여자코트 추천';
    setTitle(newTitle);
  };

  let listChange = () => {
    let newArr = [...title];
    newArr = ['마포우동맛집', '마포추천맛집', '남자코트추천'];
    newArr.sort();
    setTitle(newArr);
  };
  let posts = '마포 맛집';
  let [pushNumber, setPushNumber] = useState(0);
  let [input, setInput] = useState('');

  return (
    <div className="App">
      <div className="black-nav">개발 blog</div>
      <div style={{ color: 'red', fontSize: '50px' }}>{hi}</div>
      <button onClick={listChange}>교체</button>
      <button onClick={close}>닫기</button>

      {title.map(function (a, index) {
        return (
          <div className="list" key={index}>
            <h3
              onClick={() => {
                setPushNumber(index);
              }}
            >
              {a}
            </h3>
            <span onClick={() => up(index)}>👍 {cnt[index]}</span>
            <p>2월17일</p>
            <hr />
          </div>
        );
      })}
      {/* <button
        onClick={() => {
          setPushNumber(0);
        }}
      >
        버튼1
      </button>
      <button
        onClick={() => {
          setPushNumber(1);
        }}
      >
        버튼2
      </button>
      <button
        onClick={() => {
          setPushNumber(2);
        }}
      >
        버튼3
      </button> */}
      {/* {input}
      <input
        onChange={(e) => {
          console.log(e.target.value);
          setInput(e.target.value);
        }}
      ></input> */}

      <div className="publish">
        <input
          onChange={(e) => {
            setInput(e.target.value);
            console.log(e.target.value);
          }}
        />
        <button
          onClick={(e) => {
            title.push(input);
            let newTitle = [...title];
            setTitle(newTitle);
            console.log('야호');
            console.log(title);
          }}
        >
          저장{' '}
        </button>
      </div>
      {1 < 3 ? <Modal title={title} pushNumber={pushNumber}></Modal> : null}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h2>{props.title}</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}
export default App;
