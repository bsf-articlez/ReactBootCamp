import React from "react";
//import "./styles.css"
import { Button as AntButton } from "antd";

// function selectClass(color) {
//   switch (color) {
//     case "primary":
//       return "btn primary";
//     case "danger":
//       return "btn danger";
//     default:
//       return "btn";
//   }
// }

function Button({ children, onClick, type, ...rest }) {
  return (
    <AntButton type={type} onClick={onClick} {...rest}>
      {children}
    </AntButton>
  );
}

export default Button;
