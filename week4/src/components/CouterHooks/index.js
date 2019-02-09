import React, { useEffect, useState } from "react";

// useEffect จัดการเรื่อง life

const initial = { count: 0 };

const increseCount = setter => {
  setter(({ count }) => ({ count: count + 1 }));
};

function CouterHook() {
  const [count, setCount] = useState(initial);
  return (
    <div>
      <span>{count}</span>
      <button onClick={increseCount(setCount)}>Click me please !!!!</button>
    </div>
  );
}

export default CouterHook;
