import './Register.scss';
import React from 'react';

function Register() {
  return (
    <div className="Page2">
      <div className="Nemo">
        <div className="Empty"></div>
        <div className="P1">
          <div className="input-container"><input type="number" placeholder="1991"/><label>가입년도</label></div>
          <div className="input-container"><input type="number" placeholder="91"/><label>학번</label></div>
        </div>
        <div className="P2">
          <div className="input-container"><input type="text" placeholder="이준구"/><label>이름</label></div>
          <div className="input-container"><input type="text" placeholder="JUNGU LEE"/><label>영문이름</label></div>
        </div>
        <div className="P3">
        <div className="input-container"><input type="number" placeholder="01041391978"/><label>전화번호</label></div>
        </div>
        <div className="P4">
          <div className="Font">세션선택</div>
          <div className="Sess">
            <label><input type="checkbox"/>Vocal</label>
            <label><input type="checkbox"/>Guitar</label>
            <label><input type="checkbox"/>Bass</label>
            <label><input type="checkbox"/>Drum</label>
            <label><input type="checkbox"/>Keyboard</label>
            <label><input type="checkbox"/>Synthesizer</label> 
          </div>
        </div>
        <div className="P5">
          <div className="Font">참여했던 밴드</div>
          <div className="band">
            <div className="input-container"><input type="text"/><label>1</label></div>
            <div className="input-container"><input type="text"/><label>2</label></div>
            <div className="input-container"><input type="text"/><label>3</label></div>
            <div className="input-container"><input type="text"/><label>4</label></div>
            <div className="input-container"><input type="text"/><label>5</label></div>
          </div>
        </div>
        <div className="P6">
          <div>인스타그램</div>
          <div className="form-group">
            <span>https://www.instagram.com/</span>
            <input className="form-field" type="text" placeholder="인스타그램 ID"/>
          </div>
        </div>
        <div className="btn"><button class="button-77" role="button">등록하기</button></div>
        <div className="Empty"></div>
      </div>
    </div>
  );
}

export default Register;