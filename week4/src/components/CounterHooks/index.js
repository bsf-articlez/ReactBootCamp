import React, { useEffect, useState } from "react";

const initial = 0;

export function useCount(initial) {
  return useState(initial);
}

export const increseCount = setter => () => {
  setter(count => count + 100);
};

const componentDidMount = () => {
  console.log("ComponentDidMount");
};

const componentWillUnMount = () => {
  console.log("componentWillUnMount");
};
const componentDidUpdate = () => {
  console.log("componentDidUpdate");
};

function CounterHook() {
  const [count, setCount] = useCount(initial);
  useEffect(() => {
    componentDidMount();
    return componentWillUnMount;
  }, []);
  useEffect(componentDidUpdate, [count]);
  return (
    <div>
      <span>{count}</span>
      <br />
      <button onClick={increseCount(setCount)}>
        Click me to hook please!!
      </button>
    </div>
  );
}

export default CounterHook;
