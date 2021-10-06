import React from 'react';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';

function Cart(props) {
  console.log(props.state);
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
            {props.state.map((data, i) => {
              return (
                <tr key={i}>
                  <td>{data.id + 1}</td>
                  <td>{data.name}</td>
                  <td>{data.quan}</td>
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
                        props.dispatch({ type: '수량감소' });
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

function functionName(state) {
  console.log(state);
  return {
    state: state.reducer,
    alertOpen: state.reducer2,
  };
}

export default connect(functionName)(Cart);
// export default Cart;
