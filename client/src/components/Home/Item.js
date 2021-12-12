import React from "react";

function Item(props) {
    console.log(props.item)
  return (
    <div className="topic-content-item item-1">
      <div className="topic-content-item-content">
        <p>
          Topic: <span className="topic">{props.item.Topic}</span>
        </p>
        <p>
          Question: <span className="question">{props.item.Questions}</span>
        </p>
        <p>
          Tutorial Videos: <span className="tutorial-videos">{props.item.Tutorial_Videos}</span>
        </p>
        <p>
          Difficulties: <span className="difficulties">{props.item.Difficulties}</span>
        </p>
      </div>
    </div>
  );
}

export default Item;
