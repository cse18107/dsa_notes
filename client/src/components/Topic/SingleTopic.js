import React from "react";
import './SingleTopic.css';
function SingleTopic(props) {
  return <div className="topics">{props.children}</div>;
}

export default SingleTopic;
