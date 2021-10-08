import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';

let alertValue = true;

function reducer2(state = alertValue, action) {
  if (action.type === '닫기') {
    state = false;
    return state;
  } else {
    return state;
  }
}

let firstValue = [
  { id: 0, name: '멋진신발', quan: 2 },
  { id: 1, name: '아디신발', quan: 3 },
];

function reducer(state = firstValue, action) {
  console.log('index state', state);
  console.log('액션id', action.data);
  if (action.type === '항목추가') {
    let found = state.findIndex((a) => {
      return a.id === action.data;
    });
    console.log('found', found);
    if (found >= 0) {
      let copy = [...state];
      copy[found].quan++;
      return copy;
    } else {
      let copy = [...state];
      copy.push(action.data);
      return copy;
    }
  }
  if (action.type === '수량증가') {
    let copy = [...state];
    copy[action.data].quan++;

    return copy;
  } else if (action.type === '수량감소') {
    let copy2 = [...state];
    copy2[action.data].quan--;

    return copy2;
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
