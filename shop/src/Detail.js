/* eslint-disable */

import React, { useState, useEffect, useContext } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';
import data from './data';
import styled from 'styled-components';
import './Detail.scss';
import { stockContext } from './App';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';

let Box = styled.div`
  padding: 20px;
`;
let Title = styled.h4`
  font-size: 25px;
  color: ${(props) => props.color};
`;

function Detail(props) {
  const [state, setState] = useState(true);
  const [inputData, setInputData] = useState('');
  const [tab, setTab] = useState(0);
  let [Switch, setSwitch] = useState(false);
  let selector = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('실행 중');
    let timer = setTimeout(() => {
      setState(false);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  let history = useHistory(); // 방문기록을 저장해 놓는 object
  let { id } = useParams();
  let findShoes = props.shoes.find((shoes) => {
    return shoes.id === Number(id);
  });
  return (
    <div className="container">
      <Box>
        <Title className="red">Detail</Title>
      </Box>

      <input
        onChange={(e) => {
          setInputData(e.target.value);
        }}
      />
      {state === true ? <Alert /> : null}
      <div className="row">
        <stockContext.Provider value={props.stock}>
          <div className="col-md-6">
            <img
              src={
                'https://codingapple1.github.io/shop/shoes' +
                (findShoes.id + 1) +
                '.jpg'
              }
              alt="이미지"
              width="100%"
            />
          </div>
          <div className="col-md-6 mt-4">
            <h4 className="pt-5">{findShoes.title}</h4>
            <p>{findShoes.content}</p>
            <p>{findShoes.price}</p>
            {/* <p>재고:{props.stock[id]}</p>
             */}
            <Info i={id} />
            <button
              className="btn btn-danger"
              onClick={() => {
                let newStock = [...props.stock];
                newStock[id] -= 1;
                props.setStock(newStock);
                dispatch({
                  type: '항목추가',
                  payload: { id: findShoes.id, name: findShoes.title, quan: 1 },
                });
                history.push('/cart');
              }}
            >
              주문하기
            </button>
            &nbsp;
            <button
              className="btn btn-primary"
              onClick={() => {
                history.goBack();
              }}
            >
              뒤로가기
            </button>
          </div>
        </stockContext.Provider>
      </div>

      <Nav className="mt-5" variant="tabs" defaultActiveKey="link-0">
        <Nav.Item>
          <Nav.Link
            eventKey="link-0"
            onClick={() => {
              setTab(0);
              setSwitch(false);
            }}
          >
            Active
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link-1"
            onClick={() => {
              setTab(1);
              setSwitch(false);
            }}
          >
            Option 2
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <CSSTransition in={Switch} classNames="wow" timeout={500}>
        <TabContent tab={tab} setSwitch={setSwitch} />
      </CSSTransition>
    </div>
  );
}

function TabContent(props) {
  useEffect(() => {
    props.setSwitch(true);
  });
  if (props.tab === 0) {
    return <div>0번째 내용입니다.</div>;
  } else if (props.tab === 1) {
    return <div> 1번째 내용입니다.</div>;
  } else if (props.tab === 2) {
    return <div> 2번째 내용입니다.</div>;
  }
}

function Info(props) {
  let stock = useContext(stockContext);
  return <p>재고: {stock[props.i]}</p>;
}

function Alert() {
  return (
    <div className="my-alert-red">
      <p>재고가 얼마 남지 않았습니다.</p>{' '}
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

export default connect(functionName)(Detail);
// export default Detail;
