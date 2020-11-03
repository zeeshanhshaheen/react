import React, { useState, useEffect } from "react";

function HookCounterOne() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  // called after every render
  useEffect(() => {
    console.log("use effect updatingu");
    document.title = `You clicked ${count} times`;
  }, [count]);
  return (
    <div>
      <br />
      <br />
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
    </div>
  );
}

export default HookCounterOne;
