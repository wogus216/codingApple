/* eslint-disable */

import React, { useState, useEffect, useContext } from 'react';
import { Nav } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';
import data from './data';
import styled from 'styled-components';
import './Detail.scss';
import { stockContext } from './App';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import Select from 'react-select';

let Box = styled.div`
  padding: 20px;
`;
let Title = styled.h4`
  font-size: 25px;
  color: ${(props) => props.color};
`;

// class Detail2 extends React.Component {
//   //컴포넌트 등장할때
//   componentDidMount(){

//   }
// //컴포넌트 사라질 때
//   componentWillUnmount(){

//   }
// }

const options = [
  { value: 250, label: '250' },
  { value: 270, label: '270' },
  { value: 280, label: '280' },
];
let oldArr = [];
function Detail(props) {
  const [state, setState] = useState(true);
  const [inputData, setInputData] = useState('');
  const [tab, setTab] = useState(0);
  let [Switch, setSwitch] = useState(false);
  const [order, setOrder] = useState(0);
  const [size, setSize] = useState(0);

  useEffect(() => {
    console.log('바로 실행 중');
    let timer = setTimeout(() => {
      setState(false);
    }, 2000);
    //리턴은 컴포넌트가 사라질 때 코드 실행시 킬 수 있음
    return () => {
      clearTimeout(timer);
    };
  }, [state]);
  let history = useHistory(); // 방문기록을 저장해 놓는 object
  let { id } = useParams();
  let findShoes = props.shoes.find((shoes) => {
    return shoes.id === Number(id);
  });
  // console.log('saw', localStorage.getItem('saw'));
  if (localStorage.getItem('saw') == null) {
    console.log(1);
  }

  localStorage.setItem('saw', JSON.stringify(id));
  console.log('a', JSON.parse(localStorage.getItem('saw')));
  oldArr.push(JSON.parse(localStorage.getItem('saw')));
  //  JSON.parse(localStorage.getItem('saw'));

  localStorage.setItem('saw', JSON.stringify(oldArr));

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
            <Info id={id} />
            <button
              className="btn btn-danger"
              onClick={() => {
                let newStock = [...props.stock];
                newStock[id] -= 1;
                props.setStock(newStock);
                props.dispatch({
                  type: '항목추가',
                  payload: {
                    id: findShoes.id,
                    name: findShoes.title,
                    quan: Number(order),
                    size: size,
                  },
                });
                history.push('/cart');
              }}
            >
              주문하기
            </button>

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
  return <p>재고: {stock[props.id]}</p>;
}

function Alert() {
  return (
    <div className="my-alert-red">
      <p>재고가 얼마 남지 않았습니다.</p>{' '}
    </div>
  );
}

function name(state) {
  return {
    state: state.reducer,
    alertOpen: state.reducer2,
  };
}

export default connect(name)(Detail);

// export default Detail;
