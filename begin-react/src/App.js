import React, { useRef, useState } from "react";
import CreateUser from "./CreateUser";
import UserList from "./UserList";

function App() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
  });
  const { username, email } = inputs;

  const onChange = (e) => {
    //input태그의 이벤트
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value, //키 값에 해당하는 value 할당
    });
  };
  const [users, setUsers] = useState([
    {
      id: 1,
      username: "velopert",
      email: "public.velopert@gmail.com",
    },
    {
      id: 2,
      username: "tester",
      email: "tester@example.com",
    },
    {
      id: 3,
      username: "liz",
      email: "liz@example.com",
    },
  ]);
  const nextId = useRef(4); //nextId.current의 기본값 = 4
  //useRef로 컴포넌트 안에서 조회 및 수정 할 수 있는 변수를 관리

  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email,
    };
    setUsers([...users, user]); //users배열 복사후 user객체 추가
    //setUsers(users.concat(user)); //concat 사용
    setInputs({
      //입력칸 초기화
      username: "",
      email: "",
    });
    nextId.current += 1;
  };
  const onRemove = (id) => {
    //id가 일치하지 않는 원소만 추출해서 새로운 배열을 만든다. (id에 해당하는 원소만 제거)
    setUsers(users.filter((user) => user.id !== id));
  };
  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList
        users={users}
        onRemove={onRemove}
        /* users라는 props값에 users배열 객체를 넣어줌 */
      />
    </>
  );
}
export default App;
