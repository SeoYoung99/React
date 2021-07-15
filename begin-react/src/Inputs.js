import React, { useState } from "react";

function Input() {
  const [inputs, setInputs] = useState({
    title: "",
    singer: "",
    album: "",
  });
  const { title, singer, album } = inputs;

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  return (
    <div>
      <input
        name="title"
        placeholder="제목"
        onChange={onChange}
        value={title}
      />
      <input
        name="singer"
        placeholder="가수"
        onChange={onChange}
        value={singer}
      />
      <input
        name="album"
        placeholder="앨범"
        onChange={onChange}
        value={album}
      />
      <div>
        {title} by.{singer} ({album}){" "}
      </div>
    </div>
  );
}
export default Input;
