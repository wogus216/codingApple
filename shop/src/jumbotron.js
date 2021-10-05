import React, { useContext } from 'react';
import { stockContext } from './App';

export default function Card(props) {
  let stock = useContext(stockContext);
  return (
    <div className="col-md-4">
      <img
        src={
          'https://codingapple1.github.io/shop/shoes' + (props.i + 1) + '.jpg'
        }
        alt="이미지"
        width="100%"
      />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
      <p>{props.shoes.price}</p>
      <p>{stock[props.i]}</p>
    </div>
  );
}
