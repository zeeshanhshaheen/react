import React, { useState, useEffect } from "react";

function HookMouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    console.log("use effect called");
    window.addEventListener("mousemove", logMousePosition);

    return () => {
      console.log("Componenting unmounting code");
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []);

  const logMousePosition = (e) => {
    console.log("Mouse Event");
    setX(e.clientX);
    setY(e.clientY);
  };
  return (
    <div>
      <br />
      <br />
      Hooks X = {x} Y - {y}
    </div>
  );
}

export default HookMouse;
