import React, { useRef, useState, useMemo } from "react";
import CreateUser from "./CreateUser";
import UserList from "./UserList";

function countActiveUsers(users) {
  //인자로 배열 받아옴
  console.log("활성 사용자 수 세는 중...");
  return users.filter((user) => user.active).length;
  //배열을 순회하며 조건을 만족하는 원소들로 구성된 새로운 배열의 length
}
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
      active: true,
    },
    {
      id: 2,
      username: "tester",
      email: "tester@example.com",
      active: false,
    },
    {
      id: 3,
      username: "liz",
      email: "liz@example.com",
      active: false,
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

  const onToggle = (id) => {
    //User컴포넌트 클릭 시 넘어가는 user.id를 인자로 받아서
    setUsers(
      users.map(
        (user) => (user.id === id ? { ...user, active: !user.active } : user)
        //id가 같으면 active값을 반전, 아니면 그대로
      )
    );
  };
  const count = useMemo(() => countActiveUsers(users), [users]);
  //두번째 파라미터 배열 안에 넣은 내용이 바뀌면, 첫번째 인자로 등록한 함수를 호출해서 값을 연산해주고,
  //만약에 내용이 바뀌지 않았다면 이전에 연산한 값을 재사용
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
        onToggle={onToggle}
        /* users라는 props값에 users배열 객체를 넣어줌 */
      />
      <div>활성사용자 수: {count} </div>
    </>
  );
}
export default App;
