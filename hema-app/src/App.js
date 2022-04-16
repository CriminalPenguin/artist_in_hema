import './App.css';
import note from './img/note.svg';
import logo from './img/logo.svg';
import left from './img/left.svg';
import right from './img/right.svg';
import arrow from './img/Arrow.svg';
import { useState } from 'react';

import dummy from "./data/data.json"

import Members from './Members2.js';
import Register from './Register.js';

import { Route } from 'react-router-dom';

let 랜덤아이디 = [];
랜덤선택(랜덤아이디);

function 랜덤선택(랜덤아이디) {
  var i=0;
  var num = 0;
  var 아이디 = dummy.members.filter((id)=>{return id});
  var array = Array(아이디.length).fill().map((item, index) => index + 1);
  console.log(array);

  for(i=0; i<5; i++){
    num = Math.floor(Math.random() * (array.length));
    랜덤아이디.push(array.splice(num,1)[0]);
  }

  console.log(랜덤아이디);
} // 랜덤 멤버 노출을 위한 함수

function App() {
  let [카드, 카드변경]= useState(1);
  
  if(카드>5){
    카드변경(카드-5)
  }else if(카드<=0){
    카드변경(카드+5)
  }

  return (
    <div className="App">
      <Route exact path="/">
        <div className="Logo"><img src={logo}></img></div>
        <Div1></Div1>
        <Div2></Div2>
        <Div3 카드={카드} 카드변경={카드변경} 랜덤아이디={랜덤아이디}></Div3>
      </Route>

      <Route path="/members">
        <Members></Members>
      </Route>

      <Route path="/register">
        <Register></Register>
      </Route>
    </div>
  );
} // 전체 페이지 렌더링 함수


function Div1() {
  return (
    <div className="Div1">
      <div className="Fixed">
      <div className="Imagebox">
        
        <div className="Ssentence">
          <div className="Small1">Music,</div>
          <div className="Small2">Connect Everyone</div>
        </div>
        <div className="Bsentence">
          <div className="Big1">Eat, drink, listen and play.</div>
          <div className="Big2">Find your joy with amazing people in HEMA</div>
        </div>
        <div className="Logobox">
          <a href="https://www.instagram.com/hema_1991_/?hl=ko">
            <img src={require("./img/instagram.png")}></img>
          </a>
          <a href="https://www.facebook.com/groups/gotbeer">
            <img src={require("./img/facebook.png")} href=""></img>
          </a>
          <a href="https://www.youtube.com/channel/UCUwNUIhdE5xNpwQGEgJND_A">
            <img src={require("./img/youtube.png")} href=""></img>
          </a>
        </div>
        <img className="Mainimage" src={require("./img/Main.jpg")}></img>
      </div>
      </div>
    </div>
  );
} //파트1만 렌더링

function Div2() {
  const style = {
    top: 500
  };

  return (
    <div className="Div2">
      <div className="PageTitle">
        <div className="Title">Timeline</div>
      </div>
      <div className="Graph">
        <div className="TopLine"></div>
        <div className="Lines">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="Clef">
          <img src={require("./img/treble-clef.png")}></img>
        </div>
        <div className="Note">
          <div className="ThisNote">
            <img src={note}></img>
            <div className="About">1991. 동아리 창립</div>
          </div>
          <div className="NoteLine"></div>
        </div>
      </div>
      <div>

      </div>
    </div>
  );
} //파트2만 렌더링

function Div3(props) {
  return (
    <div className="Div3">
      <div className="CardTitle">
        <div className="Title">Artists</div>
      </div>
      <div className="CardPart">
        <CardSlide 카드={props.카드} 카드변경={props.카드변경} 랜덤아이디={props.랜덤아이디}></CardSlide>
        <div className="SlideBar">
          <button className="Select" onClick={()=>props.카드변경(props.카드-1)}><img src={left}></img></button>
          <button className="Select" onClick={()=>props.카드변경(props.카드+1)}><img src={right}></img></button>
        </div>
        
        <div className="More">
          <a href="/members">
          <div className="Members">More members</div>
          <div className="Arrow"><img src={arrow}></img></div>
          </a>
        </div>
        
      </div>
      <div className="Join"><a href="/register">Are you a member of this community?</a></div>
    </div>
  );
} //파트3만 렌더링

function CardSlide(props) {
  if(props.카드 === 1){
    return (
      <div className="Card">
        <div className="Profile1" id="card1"><img src={require("./sample/" + props.랜덤아이디[0] + ".jpeg")}></img></div>
        <div className="Profile2" id="card2"><img src={require("./sample/" + props.랜덤아이디[1] + ".jpeg")}></img></div>
        <div className="Profile3" id="card3"><img src={require("./sample/" + props.랜덤아이디[2] + ".jpeg")}></img></div>
        <div className="Profile2" id="card4"><img src={require("./sample/" + props.랜덤아이디[3] + ".jpeg")}></img></div>
        <div className="Profile1" id="card5"><img src={require("./sample/" + props.랜덤아이디[4] + ".jpeg")}></img></div>
      </div>
    );
  }
  else if(props.카드 === 2){
    return (
      <div className="Card">
        <div className="Profile1" id="card1"><img src={require("./sample/" + props.랜덤아이디[1] + ".jpeg")}></img></div>
        <div className="Profile2" id="card2"><img src={require("./sample/" + props.랜덤아이디[2] + ".jpeg")}></img></div>
        <div className="Profile3" id="card3"><img src={require("./sample/" + props.랜덤아이디[3] + ".jpeg")}></img></div>
        <div className="Profile2" id="card4"><img src={require("./sample/" + props.랜덤아이디[4] + ".jpeg")}></img></div>
        <div className="Profile1" id="card5"><img src={require("./sample/" + props.랜덤아이디[0] + ".jpeg")}></img></div>
      </div>
    );
  }
  else if(props.카드 === 3){
    return (
      <div className="Card">
        <div className="Profile1" id="card1"><img src={require("./sample/" + props.랜덤아이디[2] + ".jpeg")}></img></div>
        <div className="Profile2" id="card2"><img src={require("./sample/" + props.랜덤아이디[3] + ".jpeg")}></img></div>
        <div className="Profile3" id="card3"><img src={require("./sample/" + props.랜덤아이디[4] + ".jpeg")}></img></div>
        <div className="Profile2" id="card4"><img src={require("./sample/" + props.랜덤아이디[0] + ".jpeg")}></img></div>
        <div className="Profile1" id="card5"><img src={require("./sample/" + props.랜덤아이디[1] + ".jpeg")}></img></div>
      </div>
    );
  }
  else if(props.카드 === 4){
    return (
      <div className="Card">
        <div className="Profile1" id="card1"><img src={require("./sample/" + props.랜덤아이디[3] + ".jpeg")}></img></div>
        <div className="Profile2" id="card2"><img src={require("./sample/" + props.랜덤아이디[4] + ".jpeg")}></img></div>
        <div className="Profile3" id="card3"><img src={require("./sample/" + props.랜덤아이디[0] + ".jpeg")}></img></div>
        <div className="Profile2" id="card4"><img src={require("./sample/" + props.랜덤아이디[1] + ".jpeg")}></img></div>
        <div className="Profile1" id="card5"><img src={require("./sample/" + props.랜덤아이디[2] + ".jpeg")}></img></div>
      </div>
    );
  }
  else if(props.카드 === 5){
    return (
      <div className="Card">
        <div className="Profile1" id="card1"><img src={require("./sample/" + props.랜덤아이디[4] + ".jpeg")}></img></div>
        <div className="Profile2" id="card2"><img src={require("./sample/" + props.랜덤아이디[0] + ".jpeg")}></img></div>
        <div className="Profile3" id="card3"><img src={require("./sample/" + props.랜덤아이디[1] + ".jpeg")}></img></div>
        <div className="Profile2" id="card4"><img src={require("./sample/" + props.랜덤아이디[2] + ".jpeg")}></img></div>
        <div className="Profile1" id="card5"><img src={require("./sample/" + props.랜덤아이디[3] + ".jpeg")}></img></div>
      </div>
    );
  }
} // 랜덤멤버 렌더링 함수

export default App;
