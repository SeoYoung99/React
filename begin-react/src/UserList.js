import React from "react";

function User({ user }) {
  //컴포넌트를 재사용할 수 있도록
  return (
    <div>
      <b>{user.username}</b> <span>({user.email})</span>
    </div>
  );
}

function UserList() {
  const users = [
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
  ];

  return (
    <div>
      {/* <User user={users[0]} /> 
          <User user={users[1]} />
          <User user={users[2]} /> */}

      {
        users.map((user) => (
          <User user={user} key={user.id} /* 또는 key ={index} */ />
        ))
        /* 배열안에 있는 각 원소(user)를 반환하여 새로운 배열을 생성하므로 동적인 배열을 렌더링할 수 있다. */
      }
    </div>
  );
}

export default UserList;
