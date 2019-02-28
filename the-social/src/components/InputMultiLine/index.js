import React from "react";
import { Input } from "antd";
const { TextArea } = Input;
import "./styles.scss";

function InputMutiLine() {
  return (
    <TextArea autosize={{ minRows: 3 }} placeholder="คุณกำลังคิดอะไรอยู่" />
  );
}

export default InputMutiLine;
