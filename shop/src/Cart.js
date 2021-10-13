import React, { useState } from 'react';
import { Table, Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import data from './data';
function Cart(props) {
  let state = useSelector((state) => state);
  console.log('state', state);
  let dispatch = useDispatch();
  const [see, setSee] = useState(false);
  let style = { color: 'red' };
  return (
    <div>
      <Table>
        <thead>
          <tr style={style}>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경</th>
            <th>사이즈</th>
            <th>제거</th>
          </tr>
        </thead>
        <tbody>
          {state.reducer.map((a, i) => {
            return (
              <tr key={i}>
                <td>{a.id}</td>
                <td>{a.name}</td>
                <td>{a.quan}</td>
                <td>
                  <button
                    onClick={() => {
                      dispatch({
                        type: '수량증가',
                        data: a.id,
                      });
                    }}
                  >
                    +
                  </button>
                  <button
                    onClick={() => {
                      dispatch({ type: '수량감소', data: a.id });
                    }}
                  >
                    -
                  </button>
                </td>
                <td>{a.size}</td>
                <td
                  onMouseEnter={() => {
                    console.log('되는 겨?');
                    setSee(true);
                  }}
                >
                  {see === true ? (
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/1345/1345823.png"
                      alt="garbage"
                      width="50px"
                      onMouseOut={() => {
                        setSee(false);
                      }}
                      onClick={() => {
                        dispatch({ type: '항목제거', data: a.id });
                      }}
                    ></img>
                  ) : null}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      {props.alertOpen === true ? (
        <Alert variant="success">
          지금 구매시 20% 할인
          <button
            onClick={() => {
              props.dispatch({ type: '닫기' });
            }}
          >
            닫기
          </button>
        </Alert>
      ) : null}
    </div>
  );
}

// function name(state) {
//   return {
//     state: state.reducer,
//     alertOpen: state.reducer2,
//   };
// }

// export default connect(name)(Cart);
export default Cart;
