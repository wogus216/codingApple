import React from "react";

export default function BlogEntry({ title, good, date, onClickGood }) {
  return (
    <div className="list">
      <h3>{title}</h3>
      <span onClick={onClickGood}>👍 {good}</span>
      <p>{date}</p>
      <hr />
    </div>
  );
}
