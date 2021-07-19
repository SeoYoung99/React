import React, { useReducer, useState } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}
function Counter() {
  //const [number, setNumber] = useState(0);
  // [ 현재상태, Setter함수 ]배열 반환

  const [number, dispatch] = useReducer(reducer, 0);
  // [ 상태로 쓰일 변수 이름, 액션을 발생시키는 함수 ]
  // useReducer( )

  const onIncrease = () => {
    //화살표 함수로 구현
    //setNumber(number + 1);
    //Setter함수를 사용해 업데이트 하고 싶은 새로운 값을 파라미터로

    dispatch({ type: "INCREMENT" });
  };
  const onDecrease = () => {
    //setNumber((prevNumber) => prevNumber - 1);
    //함수형 업데이트: 기존 값을 어떻게 업데이트 할 지

    dispatch({ type: "DECREMENT" });
  };
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      {/* on이벤트이름 = {실행하고 싶은 함수} */}
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}
export default Counter;
