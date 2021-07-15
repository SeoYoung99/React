import React, { useState } from "react";

function InputSample() {
  const [inputs, setInputs] = useState({
    name: "",
    nickname: "",
  });
  const { name, nickname } = inputs; // 비구조화 할당

  const onChange = (e) => {
    const { value, name } = e.target;
    //e객체에서 value, name을 추출 (비구조화 할당)

    setInputs({
      ...inputs, //기존 input 객체 복사
      [name]: value, //name 키를 가진 값을 value로 설정
    });
  };
  const onReset = () => {
    setInputs({
      name: "",
      nickname: "",
    });
  };
  return (
    <div>
      <input name="name" placeholder="이름" onChange={onChange} value={name} />
      <input
        name="nickname"
        placeholder="닉네임"
        onChange={onChange}
        value={nickname}
      />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {name} ({nickname})
      </div>
    </div>
  );
}
export default InputSample;
