import './Members2.css';
import React from 'react';
import { useState } from 'react';

import left from './img/left.svg';
import right from './img/right.svg';
import insta from './img/instagram2.png'

import dummy from "./data/data.json"

const divNum = [1991,1992,1993,1994,1995,
                1996,1997,1998,1999,2000,
                2001,2002,2003,2004,2005,
                2006,2007,2008,2009,2010,
                2011,2012,2013,2014,2015,
                2016,2017,2018,2019,2020]

const 가입년도=['91','92','93','94','95',
              '96','97','98','99','00',
              '01','02','03','04','05']

const 가입년도2=['06','07','08','09','10',
              '11','12','13','14','15',
              '16','17','18','19','20']

function Members() {

  return(
    <div>
      {/* <Div1></Div1> */}
      <Div2></Div2>
    </div>
  );
} // 전체 UI표시 함수

function Div1() {
  return(
    <div className="Main">
      <div className="Years">
        { 가입년도.map(function(a){
          return (<div className="Num">{a}</div>)
        })}
      </div>
      <div className="Years">
        { 가입년도2.map(function(a){
          return (<div className="Num">{a}</div>)
        })} 
      </div>
    </div>
  );
} // 가입년도 네비게이션 바 함수

function Div2() {
  return(
    <div className="Main">
      {divNum.map(function(a){
        return(
          <Show a={a}></Show>
        )
      })}  
    </div>
  );
} // 실제 표시되는 부분(사진, 내용)

function Show(props) {
  var data = dummy.members.filter(function(element){
    return element.join === props.a;
  }) // 받아온 가입년도 정보를 기반으로 가입년도별 데이터 추출
  
  let [num, num변경] = useState(0);
  var 선택자 = data[num];
  var len = data.length;
  var barnum = 1/len;
  var result = barnum*(num+1)*100;
  const style={
    width: `${result}%`
  };

  const style2={
    left: `${result}%`
  }

  const Minus = ()=> {
    if(num === 0){
      num변경((len-1))
    }
    else{
      num변경(num - 1)
    }
    
  } 
  
  const Plus = () => {
    if(num === (len-1)){
      num변경(0)
    }
    else{
      num변경(num + 1)
    }
  }

  return (
    <div className="Display">
            <div className="Part1">
              <div><div></div></div>
              <p>Playing Now {props.a}</p>
              <div><a href={선택자.insta}><div id="insta"><img src={insta}></img></div></a></div>
            </div>
            <div className="Part2">
              <div className="Circle">
                <div className="Photo">
                  <img src={require("./sample/"+ 선택자.id + ".jpeg")}></img>
                </div>
              </div>
            </div>
            <div className="Part3">
              <p id="name">{선택자.ename}</p>
              <div id="session">
                {선택자.session.map(function(b){
                  return(
                    <div>
                      {b}&nbsp;&nbsp;
                    </div>
                  )
                })}
              </div>
              <div id="band">
                {선택자.band.map(function(b){
                  return(
                    <div>
                      {b}&nbsp;&nbsp;
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="Part4">
              <div className="Many">
                <div>0:00</div>
                <div>{data.length}:00</div>
              </div>
              <div className="Bar">
                <div style={style} className="Progress"></div>
                <div className="Now" style={style2}><div></div></div>
              </div>
            </div>
            <div className="Part5">
              <div className="Btn" onClick={Minus}><img src={left}></img></div>
              <div id="play">
                <div id="playbtn">
                  <div id="btn">
                    <div className="Nemo"></div><div className="Nemo"></div>
                  </div>
                </div>
              </div>
              <div className="Btn" onClick={Plus}><img src={right}></img></div>
            </div>
          </div>
      
  )
} // 사진 불러오기

export default Members;