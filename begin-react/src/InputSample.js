import React, { useState } from "react";

function InputSample() {
  const [text, setText] = useState(""); //현재상태, Setter함수
  const onChange = (e) => {
    setText(e.target.value); //이벤트가 발생한 DOM의 값으로 text를 업데이트
  };
  const onReset = () => {
    setText(""); //reset
  };
  return (
    <div>
      <input onChange={onChange} value={text} />
      {/* input태그의 value값도 설정해주어야 내용이 업데이트됨 */}
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: {text}</b>
      </div>
    </div>
  );
}
export default InputSample;
