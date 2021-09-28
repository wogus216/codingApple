/* eslint-disable */
import React, { useState } from 'react';
import './App.css';
import logo from './logo.svg';

function App() {
  let [state, setState] = useState([
    '남자코트 추천',
    '마포추천맛집',
    '강남 우동 맛집',
  ]);
  let [num, setNum] = useState([0, 1, 2]);
  let [modal, setModal] = useState(false);
  let [push, setPush] = useState(0);
  let [input, setInput] = useState('');
  let posts = '마포 고기 맛집';

  function change() {
    let newState = [...state];
    newState[0] = '여자추천맛집';
    setState(newState);
  }

  function save() {
    let addState = [...state, input];
    let addNum = [...num, 0];
    setNum(addNum);
    setState(addState);
  }

  function Modal(props) {
    console.log(props.state);
    console.log(props.push);
    return (
      <div className="modal">
        <h2>{props.state[props.push]}</h2>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
    );
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div className={posts}>개발Blog</div>
      </div>
      <button onClick={change}>제목 바꾸기</button>
      {state.map((a, i) => {
        return (
          <div className="list" key={i}>
            <h4
              onClick={() => {
                setPush(i);
              }}
            >
              {state[i]}
              <span
                onClick={() => {
                  let newNum = [...num];
                  newNum[i]++;
                  setNum(newNum);
                }}
              >
                👍
              </span>{' '}
              {num[i]}{' '}
            </h4>
            <p>2월17일 발행</p>
            <hr></hr>
          </div>
        );
      })}
      {/* <button
        onClick={() => {
          setPush(0);
        }}
      >
        버튼1
      </button>
      <button
        onClick={() => {
          setPush(1);
        }}
      >
        버튼2
      </button>
      <button
        onClick={() => {
          setPush(2);
        }}
      >
        버튼3
      </button> */}
      {input}
      <input
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button onClick={save}>저장</button>
      <button
        onClick={() => {
          setModal(!modal);
        }}
      >
        모달 버튼
      </button>

      {modal === true ? <Modal state={state} push={push} /> : null}
    </div>
  );
}
export default App;
