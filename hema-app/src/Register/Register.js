import './Register.scss';
import React, { useState } from 'react';

import dummy from "../data/data.json"


var group = {};
var auto = 1;

function Register() {
  

  let [등록정보, 등록정보변경] = useState({
    id : "",
    join : "",
    name : "",
    classe : "",
    ename : "",
    phone : "",
    session : "",
    band : "",
    insta : ""
  })
  let [밴드,밴드변경] = useState({
    b1: "",
    b2: "",
    b3: "",
    b4: "",
    b5: ""
  });

  const { join, name, classe, ename, phone, insta } = 등록정보;
  const { b1, b2, b3, b4, b5 } = 밴드; 

  const onChange = (e) => {
    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    등록정보변경({
      ...등록정보, // 기존의 input 객체를 복사한 뒤
      [name]: value // name 키를 가진 값을 value 로 설정
    });
  };
  
  const onChangeCheck = (e) => {
    const { checked, id,  } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    if(checked === true){
      group[auto] = id;
      auto ++;
    }
    else if( checked === false){
      auto --;
      delete group[auto];
    }
    console.log(auto);
    console.log(group);
  };

  const onChangeBand = (e) => {
    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    밴드변경({
      ...밴드, // 기존의 input 객체를 복사한 뒤
      [name] : value // id 키를 가진 값을 value 로 설정
    });
  };

  function sendData () {
    등록정보변경(등록정보.session = group);
    등록정보변경(등록정보.band = 밴드);
    등록정보변경(등록정보.id = dummy.members.length + 1);
    등록정보변경("https://www.instagram.com/"+등록정보);
    // JSON 파일에 정보 추가
    console.log(등록정보);
    localStorage.setItem('./data/data.json', 등록정보);
    window.location.replace("/members");
  }

  return (
    <div className="Page2">
      <div className="Nemo">
        <div className="Empty"></div>
        <div className="P1">
          <div className="input-container"><input type="number" placeholder="1991" name="join" value={join} onChange={onChange}/><label>가입년도</label></div>
          <div className="input-container"><input type="number" placeholder="91" name="classe" value={classe} onChange={onChange}/><label>학번</label></div>
        </div>
        <div className="P2">
          <div className="input-container"><input type="text" placeholder="이준구" name="name" value={name} onChange={onChange}/><label>이름</label></div>
          <div className="input-container"><input type="text" placeholder="JUNGU LEE" name="ename" value={ename} onChange={onChange}/><label>영문이름</label></div>
        </div>
        <div className="P3">
        <div className="input-container"><input type="number" placeholder="01041391978" name="phone" value={phone} onChange={onChange}/><label>전화번호</label></div>
        </div>
        <div className="P3">
        <label className="La" for="chooseFile">📸사진을 골라주세요📸</label><input type="file" id="chooseFile" name="chooseFile" accept="image/*"></input>
        </div>
        <div className="P4">
          <div className="Font">세션선택</div>
          <div className="Sess">
            <label><input type="checkbox" id="Vocal" name="session" onChange={onChangeCheck}/>Vocal</label>
            <label><input type="checkbox" id="Guitar" name="session" onChange={onChangeCheck}/>Guitar</label>
            <label><input type="checkbox" id="Bass" name="session" onChange={onChangeCheck}/>Bass</label>
            <label><input type="checkbox" id="Drum" name="session" onChange={onChangeCheck}/>Drum</label>
            <label><input type="checkbox" id="Keyboard" name="session" onChange={onChangeCheck}/>Keyboard</label>
            <label><input type="checkbox" id="Synthesizer" name="session" onChange={onChangeCheck}/>Synthesizer</label> 
          </div>
        </div>
        <div className="P5">
          <div className="Font">참여했던 밴드</div>
          <div className="band">
            <div className="input-container"><input type="text" name="b1" value={b1} onChange={onChangeBand}/><label>1</label></div>
            <div className="input-container"><input type="text" name="b2" value={b2} onChange={onChangeBand}/><label>2</label></div>
            <div className="input-container"><input type="text" name="b3" value={b3} onChange={onChangeBand}/><label>3</label></div>
            <div className="input-container"><input type="text" name="b4" value={b4} onChange={onChangeBand}/><label>4</label></div>
            <div className="input-container"><input type="text" name="b5" value={b5} onChange={onChangeBand}/><label>5</label></div>
          </div>
        </div>
        <div className="P6">
          <div>인스타그램</div>
          <div className="form-group">
            <span>https://www.instagram.com/</span>
            <input className="form-field" type="text" placeholder="인스타그램 ID" name="insta" value={insta} onChange={onChange}/>
          </div>
        </div>
        <div className="btn"><button class="button-77" role="button" onClick={sendData}>등록하기</button></div>
        <div className="Empty"></div>
      </div>
    </div>
  );
}



export default Register;