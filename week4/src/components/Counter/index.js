import React, { Component } from "react";
import { increseCount, useCount } from "../CounterHooks";
function Counter() {
  const [count, setCount] = useCount(0);
  return (
    <div>
      <span>{count}</span>
      <button onClick={increseCount(setCount)}>Click me please !!!!</button>
    </div>
  );
}
export default Counter;
