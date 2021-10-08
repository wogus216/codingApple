import React from 'react';
import { Table } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

function Cart(props) {
  const state = useSelector((state) => state);
  console.log('reducer', state.reducer);
  const dispatch = useDispatch();
  console.log('state', state);
  return (
    <div>
      <div>
        <Table responsive="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>상품명</th>
              <th>수량</th>
              <th>변경</th>
            </tr>
          </thead>
          <tbody>
            {state.reducer.map((a, i) => {
              return (
                <tr key={i}>
                  <td>{a.id + 1}</td>
                  <td>{a.name}</td>
                  <td>{a.quan}</td>
                  <td>
                    <button
                      onClick={() => {
                        props.dispatch({
                          type: '수량증가',
                          payload: { name: 'kim' },
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
                </tr>
              );
            })}
          </tbody>
        </Table>
        {props.alertOpen === true ? (
          <div class="alert alert-info" role="alert">
            <p>지금 구매하면 신규할인 20%</p>
            <button
              onClick={() => {
                props.dispatch({ type: '닫기' });
              }}
            >
              닫기
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}

// function functionName(state) {
//   console.log(state);
//   return {
//     state: state.reducer,
//     alertOpen: state.reducer2,
//   };
// }

// export default connect(functionName)(Cart);
export default Cart;
