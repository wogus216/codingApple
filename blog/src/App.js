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
    let plusCnt = [...cnt];
    plusCnt[index]++;
    setCnt(plusCnt);
  };

  let minus = (index) => {
    let minusCnt = [...cnt];
    minusCnt[index]--;
    setCnt(minusCnt);
  };

  let del = (index) => {
    let choice = [...title];
    choice.splice(index, 1);
    setTitle(choice);
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
            <button onClick={() => minus(index)}>마이너스</button>
            <button onClick={() => del(index)}>삭제버튼</button>
            <p>2월17일</p>
            <hr />
          </div>
        );
      })}

      <div className="publish">
        <input
          onChange={(e) => {
            setInput(e.target.value);
            console.log(e.target.value);
          }}
        />
        <button
          onClick={(e) => {
            //unshift는 맨앞으로 추가
            let newTitle = [...title];
            newTitle.push(input);
            setTitle(newTitle);
            let newCnt = [...cnt];
            newCnt.push(0);
            setCnt(newCnt);
          }}
        >
          저장{' '}
        </button>
      </div>

      <Profile />
      {1 < 3 ? <Modal title={title} pushNumber={pushNumber}></Modal> : null}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h2>{props.title[props.pushNumber]}</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
  //깃 확인
}

class Profile extends React.Component {
  constructor() {
    super();
    this.state = { name: 'Kim', age: 30 };
  }

  changeName() {
    this.setState({ name: 'Kwon' });
  }

  render() {
    return (
      <div>
        {' '}
        <h3>프로필입니다.</h3>
        <p>저는 {this.state.name} 입니다.</p>
        <button onClick={this.changeName.bind(this)}>버튼</button>
      </div>
    );
  }
}
export default App;
