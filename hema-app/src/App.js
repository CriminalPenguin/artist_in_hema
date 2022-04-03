import './App.css';
import note from './img/note.svg';

function App() {
  return (
    <div className="App">
      <Div1></Div1>
      <Div2></Div2>
      <Div3></Div3>
    </div>
  );
} // 전체 페이지 렌더링 함수

function Div1() {
  return (
    <div className="Div1">
      <div className="Imagebox">
        <div className="Ssentence">
          <div className="Logo">(로고) HEMA</div>
          <div className="Small1">Music,</div>
          <div className="Small2">Connect Everyone</div>
        </div>
        <div className="Bsentence">
          <div className="Big1">Eat, drink, listen and play.</div>
          <div className="Big2">Find your joy with amazing people</div>
        </div>
        <div className="Logobox">
          <a href="https://www.instagram.com/hema_1991_/?hl=ko">
            <img src={require("./img/instagram.png")}></img>
          </a>
          <a href="https://www.facebook.com/groups/gotbeer">
            <img src={require("./img/facebook.png")} href=""></img>
          </a>
        </div>
        <img className="Mainimage" src={require("./img/Main.jpg")}></img>
      </div>
    </div>
  );
} //파트1만 렌더링

function Div2() {
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

function Div3() {
  return (
    <div className="Div3">
      <div className="CardTitle">
        <div className="Title">Random Artists</div>
      </div>
      <div className="CardPart">
        <div className="Card">
          <div className="Profile1" id="card1"><img src={require("./sample/1.png")}></img></div>
          <div className="Profile2" id="card2"><img src={require("./sample/2.jpeg")}></img></div>
          <div className="Profile3" id="card3"><img src={require("./sample/3.jpeg")}></img></div>
          <div className="Profile2" id="card4"><img src={require("./sample/4.jpeg")}></img></div>
          <div className="Profile1" id="card5"><img src={require("./sample/5.jpeg")}></img></div>
        </div>
        <div className="SlideBar">슬라이드 바</div>
        <div className="More">
          <div>More members</div><div>화살표</div>
        </div>
      </div>
    </div>
  );
} //파트3만 렌더링

export default App;
