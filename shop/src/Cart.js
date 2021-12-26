import axios from 'axios';
import React from 'react';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';
function Cart(props) {
  return (
    <div>
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경</th>
          </tr>
        </thead>
        <tbody>
          {props.state.map((data, idx) => {
            return (
              <tr key={idx}>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.quan}</td>
                <td>
                  <button
                    onClick={() => {
                      props.dispatch({ type: 'add' });
                    }}
                  >
                    +
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      props.dispatch({ type: 'minus' });
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
    </div>
  );
}

function func(state) {
  return {
    state: state,
  };
}

export default connect(func)(Cart);
// export default Cart;
