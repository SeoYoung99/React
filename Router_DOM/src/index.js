import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter, Route, Switch, Link, NavLink ,useParams} from 'react-router-dom';

//1. BrowserRouter는 최상위 컴포넌트를 감싸주어 BrowserRouter를 사용가능하도록 해준다.
//2. url에 따라 달라져야하는 컴포넌트에 Route로 감싸주고 path지정
//3. Link : 페이지가 바뀌지 않고 링크로 이동
//4. NavLink : 클릭 시 해당 a태그에 active class생성 => css의 .active로 스타일 변경가능

function Home(){
  return(
    <div>
      <h2>Home</h2>
      home...
    </div>
  )
}
var contents = [ //전역변수 잭체 배열 생성
  {id: 1, title: 'HTML', description: 'HTML is...'},
  {id: 2, title: 'JavaScript', description: 'JavaScript is...'},
  {id: 3, title: 'React', description: 'React is...'},
]

function Topic(){
  var params = useParams(); 
  // useParams는 path parameter의 정보를 얻을 수 있는 hooks (params: {topic_id: "1"}객체)
  var topic_id = params.topic_id; // params객체의 topic_id값
  var selected_topic = { title: 'Sorry', description: 'Not found'} // default값도 설정해줌

  for(var i =0; i<contents.length; i++){
    if(contents[i].id === Number(topic_id)){
      selected_topic = contents[i];
      break;
    }
  }
  return (
    <div>
      <h3>{selected_topic.title}</h3>
      {selected_topic.description}
    </div>
  )
}

function Topics(){

  var list = []; //리스트 만들어서 편리하게 <li>태그 생성

  for(var i= 0; i< contents.length; i++){
    list.push(<li key={contents[i].id}><NavLink to={'/topics/'+ contents[i].id}>{contents[i].title}</NavLink></li>);
  }
  return(
    <div>
      <h2>Topics</h2>
        <ul>
          {list}
        </ul>
          <Route path="/topics/:topic_id">
            {/* topic_id라는 동적 라우팅값을 걸어주었다. 
            하나의 라우터로 parameter를 받기 위한 변수(id)를 설정해주면 해당 자리에 들어오는 숫자가 
            Topic컴포넌트로 전달되고, useParams Hooks를 사용해 가져와 동적으로 동작하는 페이지 생성 가능
            */}
            <Topic/>
          </Route>
          {/*<Switch>
            <Route path="/topics/1">HTML is ...</Route>
            <Route path="/topics/2">JavaScript is ...</Route>
            <Route path="/topics/3">React is ...</Route>
          </Switch>*/}
    </div>
  )
}
function Contact(){
  return(
    <div>
      <h2>Contact</h2>
      contact...
    </div>
  )
}
function App(){ //index.js 안에서 직접 App component를 만들어서 render
  return(
  <div>
  <h1>React Router DOM example</h1>
  <ul>
    <li><NavLink exact to='/'>Home</NavLink></li> {/*누르면 해당 링크로 이동 ( a href='' 대신 Link to=''사용 )*/}
    <li><NavLink to='/topics'>topics</NavLink></li> {/* Link => 페이지가 바뀌지 않고 링크로 이동*/}
    <li><NavLink to='/contact'>contact</NavLink></li>
  </ul>
    <Switch>
      <Route exact path="/"><Home/></Route> {/*최상위 링크에 접근하면 Home컴포넌트를 라우팅*/}
      <Route path="/topics"><Topics/></Route> {/*http://localhost:3001/topics에 접근하면 Home컴포넌트를 라우팅*/}
      <Route path="/contact"><Contact/></Route> {/*http://localhost:3001/contact에 접근하면 Home컴포넌트를 라우팅*/}
      <Route path="/"><b>Not Found</b></Route> {/*url이 잘못되엇을 때*/}
    </Switch>
  </div>
  )
}

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>,document.getElementById('root'));
