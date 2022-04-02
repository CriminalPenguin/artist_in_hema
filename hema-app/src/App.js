import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Div1">
        <Div1></Div1>
      </div>
      <div className="Div2">
        <Div2></Div2>
      </div>
      <div className="Div3">
        <Div3></Div3>
      </div>
    </div>
  );
}

function Div1() {
  return (
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
      <img className="Mainimage" src={require("./img/Main.jpg")}></img>
    </div>
  );
}

function Div2() {
  return (
    <div>History역사</div>
  );
}

function Div3() {
  return (
    <div>Random Image</div>
  );
}

export default App;
