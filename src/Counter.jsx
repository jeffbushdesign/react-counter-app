import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  // testing a change
  // testing a change

  return (
    <>
      <p>The count is: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </>
  );
};

export default Counter;
