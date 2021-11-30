import React from 'react';

export default function BlogEntry({
  title,
  good,
  date,
  onClickGood,
  onClickMinus,
  onClickDel,
}) {
  return (
    <div className="list">
      <h3>{title}</h3>
      <span onClick={onClickGood}>👍 {good}</span>
      <button onClick={onClickMinus}>마이너스</button>
      <button onClick={onClickDel}>삭제</button>
      <p>{date}</p>
      <hr />
      <hr />
    </div>
  );
}
