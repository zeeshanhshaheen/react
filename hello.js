import React from "react";

const Hello = () => {
  // With using JSX

  // return (
  //     <div>
  //         <h1>Hello</h1>
  //     </div>
  // );

  // Without using JSX

  return React.createElement(
    "div",
    { id: "id1", className: "firstClass" },
    React.createElement("h1", null, "Hello Zeeshan")
  );
};

export default Hello;
