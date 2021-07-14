import React from "react";
//컴포넌트를 만들때 리액트를 불러온다.

function Hello({ color, name }) {
  //함수형 컴포넌트
  return <div style={{ color }}>안녕하세요 {name}</div>;
}
Hello.defaultProps = {
  name: "이름없음",
};
export default Hello;
//Hello라는 컴포넌트를 내보낸다.
