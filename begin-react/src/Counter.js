import React, { useState } from "react";

function Counter() {
  const [number, setNumber] = useState(0);
  // [ 현재상태, Setter함수 ]배열 반환
  const onIncrease = () => {
    //화살표 함수로 구현
    setNumber(number + 1);
    //Setter함수를 사용해 업데이트 하고 싶은 새로운 값을 파라미터로
  };
  const onDecrease = () => {
    setNumber((prevNumber) => prevNumber - 1);
    //함수형 업데이트: 기존 값을 어떻게 업데이트 할 지
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
