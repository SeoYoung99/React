import React, { useEffect } from "react";

//User컴포넌트: 배열의 각 요소를 보여준다
function User({ user, onRemove, onToggle }) {
  useEffect(() => {
    console.log("user 값이 설정됨");
    console.log(user);
    return () => {
      console.log("user 가 바뀌기 전..");
      console.log(user);
    };
  }, [user]);
  //빈배열: 처음 마운트때만, 언마운트될 때만
  //배열 생략: 매 렌더링마다
  //배열에 특정값: 처음 마운트 될 때와 해당 값이 바뀔 때 수행하고자 하는 작업이 실행,
  //               배열 안의 값이 업데이트 되기 직전과 언마운트될 때 return 실행
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
