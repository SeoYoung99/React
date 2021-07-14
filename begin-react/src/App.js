import React, { Component } from "react";
import Hello from "./Hello";
import "./App.css";

function App() {
  const name = "react";
  const style = {
    backgroundColor: "black",
    color: "aqua",
    fontsize: 24,
    padding: "1rem",
  };
  return (
    <>
      <Hello />
      <div style={style}>{name}</div>
      {/* JSX 내부에 자바스크립트 변수를 보여줄때는 중괄호 사용*/}
      <div className="gray-box"></div>
    </>
  );
}

export default App;
