import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';

let alert = true;

function reducer2(state = alert, action) {
  if (action.type === '닫기') {
    state = false;
  } else {
    return state;
  }
}

let first = [
  { id: 0, name: 'nike', quan: 2, 사이즈: 250 },
  { id: 1, name: 'adidas', quan: 1, 사이즈: 260 },
];

function reducer(state = first, action) {
  //항목제거
  if (action.type === '항목제거') {
    console.log(action.data);
    let copy = [...state];
    copy = copy.filter((a) => a.id !== action.data);
    return copy;
  }

  if (action.type === '항목추가') {
    let copy = [...state];
    let found = state.findIndex((a) => {
      console.log('a.id', a.id);
      return a.id === action.payload.id;
    });

    console.log('found', found);
    console.log('action.quan', action.payload.quan);

    if (found >= 0) {
      copy[found].quan++;
      console.log('중복증가 ', copy);
      return copy;
    } else {
      console.log('action', action);
      copy.push(action.payload);
      console.log('항목추가 ', copy);
      return copy;
    }
  }
  //수량 증가
  if (action.type === '수량증가') {
    let copy = [...state];
    console.log('action.payload.quan', action.payload.quan);
    copy[action.data].quan++;
    return copy;
  } else if (action.type === '수량감소') {
    let copy = [...state];
    if (copy[action.data].quan > 0) {
      copy[action.data].quan--;
    }
    return copy;
  } else {
    return state;
  }
}

let store = createStore(combineReducers({ reducer, reducer2 }));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
