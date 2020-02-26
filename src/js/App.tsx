import React from "react";
import "../css/main.less";

function App(props: { name: string, age: number }) {
  console.log(props.name);
  return (
    <>
      <div>Hello</div>
      <img
        src={require("../imgs/1200px-Avenue_of_Stars_Hong_Kong_Bruce_Lee_Statue.jpg")}
        alt=""
      />
      <div id="pic"></div>
    </>
  );
}

export default App;
