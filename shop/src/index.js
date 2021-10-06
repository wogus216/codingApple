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
  { id: 2, name: '멋진신발', quan: 5 },
];

function reducer(state = firstValue, action) {
  if (action.type === '수량증가') {
    let copy = [...state];
    copy[0].quan++;

    return copy;
  } else if (action.type === '수량감소') {
    let copy2 = [...state];
    copy2[0].quan--;

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
