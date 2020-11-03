import React, { useEffect, useState } from "react";

function IntervelHookCounter() {
  const [count, setCount] = useState(0);

  const tick = () => {
    setCount(count + 1);
  };
  useEffect(() => {
    const intervel = setInterval(tick, 1000);

    return () => {
      clearInterval(intervel);
    };
  }, [count]);
  return (
    <div>
      <br />

      <h1>{count}</h1>
      <br />
      <hr />
    </div>
  );
}

export default IntervelHookCounter;
