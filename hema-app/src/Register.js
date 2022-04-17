import './Register.scss';
import React, { useState } from 'react';

function Register() {
  let [등록정보, 등록정보변경] = useState({
    id : "",
    join : "",
    name : "",
    classe : "",
    ename : "",
    phone : "",
    session : [],
    band : [],
    insta : ""
  })

  const { id, join, name, classe, ename, phone, session, band, insta } = 등록정보;

  const onChange = (e) => {
    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    등록정보변경({
      ...등록정보, // 기존의 input 객체를 복사한 뒤
      [name]: value // name 키를 가진 값을 value 로 설정
    });
  };

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
            <label><input type="checkbox" id="s1"/>Vocal</label>
            <label><input type="checkbox" id="s2"/>Guitar</label>
            <label><input type="checkbox" id="s3"/>Bass</label>
            <label><input type="checkbox" id="s4"/>Drum</label>
            <label><input type="checkbox" id="s5"/>Keyboard</label>
            <label><input type="checkbox" id="s6"/>Synthesizer</label> 
          </div>
        </div>
        <div className="P5">
          <div className="Font">참여했던 밴드</div>
          <div className="band">
            <div className="input-container"><input type="text" id="b1"/><label>1</label></div>
            <div className="input-container"><input type="text" id="b2"/><label>2</label></div>
            <div className="input-container"><input type="text" id="b3"/><label>3</label></div>
            <div className="input-container"><input type="text" id="b4"/><label>4</label></div>
            <div className="input-container"><input type="text" id="b5"/><label>5</label></div>
          </div>
        </div>
        <div className="P6">
          <div>인스타그램</div>
          <div className="form-group">
            <span>https://www.instagram.com/</span>
            <input className="form-field" type="text" placeholder="인스타그램 ID" name="insta" value={insta} onChange={onChange}/>
          </div>
        </div>
        <div className="btn"><button class="button-77" role="button">등록하기</button></div>
        <div className="Empty"></div>
      </div>
    </div>
  );
}



export default Register;