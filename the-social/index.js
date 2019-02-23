import React from "react";
import ReactDOM from "react-dom";
//import Button from "components/Button";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { Button } from "antd";

function App() {
  return (
    <div>
      <Button>Test</Button>
    </div>
  );
}

const selector = document.querySelector("#app");

ReactDOM.render(<App />, selector);
