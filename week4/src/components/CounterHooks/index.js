import React, { useEffect, useState } from "react";

// useEffect จัดการเรื่อง life

const initial = 0;

export function useCount(initial) {
  const [count, setSount] = useState(initial);
  return [count, setSount];
}

export const increseCount = setter => () => {
  setter(count => count + 100);
};

function CounterHook() {
  const [count, setCount] = useCount(initial);
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
