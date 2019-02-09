import React, { useEffect, useState } from "react";

// useEffect จัดการเรื่อง life

const initial = 0;

const increseCount = setter => () => {
  setter(state => state + 1);
};

function CounterHook() {
  const [count, setCount] = useState(initial);
  return (
    <div>
      <span>{count}</span>
      <button onClick={increseCount(setCount)}>
        Click me to hook please !!!!
      </button>
    </div>
  );
}

export default CounterHook;
