import React, { useState } from "react";
import HookMouse from "./HookMouse";

function MouseContainer() {
  const [display, setDisplay] = useState(true);
  return (
    <div>
      <br />
      <br />
      <button onClick={() => setDisplay(!display)}>Toggle Display</button>
      {display && <HookMouse />}
    </div>
  );
}

export default MouseContainer;
