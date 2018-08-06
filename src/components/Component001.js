import React from "react";

const Component001 = ({ containerState001ToProps, onClickDis }) => (
  <div>
    <ul>
      {containerState001ToProps.map((arrData,index) => (
        <li key={index}
        onClick={() => onClickDis(index)}>
          {arrData}
        </li>
      ))}
    </ul>
  </div>
);

export default Component001;
