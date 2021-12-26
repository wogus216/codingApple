import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import { colors } from 'react-select/dist/declarations/src/theme';

let alert = true;

let firstValue = [
  { id: 1, name: 'adidas', quan: 1, 사이즈: 260 },
  { id: 0, name: 'nike', quan: 2, 사이즈: 250 },
];
//reducer는 무조건 state를 리턴 해야한다.
function reducer(state = firstValue, action) {
  let copy = [...state];

  if (action.type === 'add') {
    copy[firstValue.id].quan++;
    return copy;
  } else if (action.type === 'minus') {
    copy[state.id].quan--;
    return copy;
  } else {
    return state;
  }
}

let store = createStore(reducer);

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
