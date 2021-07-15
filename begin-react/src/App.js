import React from "react";
import Hello from "./Hello";
import Wrapper from "./Wrapper";
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
      <Wrapper>
        <Hello name="react" color="red" isTrue={false} />
        <Hello color="pink" />
      </Wrapper>
      {/* Hello라는 컴포넌트에 props전달, Hello컴포넌트에서 인자로 받는다.*/}
      <div style={style}>{name}</div>
      {/* JSX 내부에 자바스크립트 변수를 보여줄때는 중괄호 사용*/}
      <div className="gray-box"></div>
    </>
  );
}

export default App;
