import React from "react";
import './Headings.css';
function Headings(props) {
  return (
    <div className="topic-body-heading">
      <div className="topic-heading" style={{ height: "70px", width: "160px" }}>
        {props.children}
      </div>
    </div>
  );
}

export default Headings;
