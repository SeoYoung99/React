import React from "react";

//User컴포넌트: 배열의 각 요소를 보여준다
function User({ user, onRemove, onToggle }) {
  return (
    <div>
      <b
        style={{
          cursor: "pointer",
          //마우스를 올리면 손가락 모양으로 변한다.
          color: user.active ? "green" : "black",
          //active가 참이면 초록색, 아니면 검정색
        }}
        onClick={() => onToggle(user.id)} //클릭되면 onToggle함수 실행
      >
        {user.username}
      </b>{" "}
      <span>({user.email})</span>
      <button onClick={() => onRemove(user.id)}>삭제</button>
    </div>
  );
}

function UserList({ users, onRemove, onToggle }) {
  return (
    <div>
      {users.map((user) => (
        //map() 함수는 users라는 배열의 요소를 돌면서
        //인자로 전달된 함수를 사용하여 처리 된 새로운 결과를 새로운 배열에 담아 반환
        <User
          user={user}
          key={user.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}

export default UserList;
