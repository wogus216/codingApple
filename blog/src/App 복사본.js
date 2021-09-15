/* eslint-disable */
import React, { useState } from 'react';
import './App.css';
import logo from './logo.svg';
import BlogEntry from './BlogEntry';

const init = [
  {
    title: '남자코트',
    good: 0,
    date: '2월 17일',
  },
  {
    title: '마포추천',
    good: 2,
    date: '2월 17일',
  },
  {
    title: '마포우동',
    good: 0,
    date: '2월 17일',
  },
  {
    title: '테스트',
    good: 0,
    date: '2월 17일',
  },
];

function App() {
  // 여기부터 제가
  const [info, setInfo] = useState(init);
  const [title, setTitle] = useState('');

  // 입력값 변경
  const onChange = (event) => {
    const { value } = event.target;
    setTitle(value);
  };

  // 저장 클릭
  const onClick = () => {
    const newInfo = {
      title: title,
      good: 0,
      date: '2월 17일',
    };
    setInfo([...info, newInfo]);
  };

  // 좋아요 클릭
  const onClickGood = (index) => {
    info[index].good++;
    setInfo([...info]);
  };

  return (
    <div className="App">
      <div className="black-nav">개발 blog</div>

      {info.map(function (data, index) {
        return (
          <BlogEntry
            key={index}
            title={data.title}
            good={data.good}
            date={data.date}
            onClickGood={() => onClickGood(index)}
          />
        );
      })}

      <div className="publish">
        <input onChange={onChange} />
        <button onClick={onClick}>저장 </button>
      </div>
      {/* {1 < 3 ? <Modal title={title} pushNumber={pushNumber}></Modal> : null} */}
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
