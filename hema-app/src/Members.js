import './Members.css';
import React from 'react';
import { useRef, useEffect, useState } from 'react';

import dummy from "./data/data.json"

const divNum = [1991,1993,1995,1997,1999,
                2001,2003,2005,2007,2009,
                2011,2013,2015,2017,2019]

const 가입년도=['91','92','93','94','95',
              '96','97','98','99','00',
              '01','02','03','04','05']

const 가입년도2=['06','07','08','09','10',
              '11','12','13','14','15',
              '16','17','18','19','20']

function Members() {
  return(
    <div>
      <Div1></Div1>
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
          <div>
            <Left a={a}></Left>
            <Right a={a}></Right>
          </div>
        )
      })}
      
    </div>
  );
} // 실제 표시되는 부분(사진, 내용)

function Left(props) {
  const data = dummy.members.filter(function(element){
    return element.join === props.a;
  }) // 받아온 가입년도 정보를 기반으로 가입년도별 데이터 추출

  return(
    <div className="Members">
      <div className="Photo"><img src={require("./sample/"+ data[0].id + ".jpeg")}></img></div>
      <div className="AboutR">
        <div className="Name">
          <div>{data[0].join}, we got</div>
          <div> {data[0].ename}</div>
        </div>
        <div className="Class">{data[0].class}</div>
        <div className="Session">{data[0].session}</div>
        <div className="Band">{data[0].band}</div>
        {/* {data.map(function(i){
          console.log(data)
          return(
            
            <div>
              {data[i].name}
            </div>
          )
        })} */}
      </div>
    </div>
  )
}

function Right(props) {
  const data = dummy.members.filter(function(element){
    return element.join === (props.a + 1);
  })
  
  return(
    <div className="Members">
      <div className="AboutL">
        <div className="Name">
          <div>{data[0].join}, we got</div>
          <div> {data[0].ename}</div>
        </div>
        <div className="Class">{data[0].class}</div>
        <div className="Session">{data[0].session}</div>
        <div className="Band">{data[0].band}</div>
      </div>
      <div className="Photo"><img src={require("./sample/"+data[0].id+".jpeg")}></img></div>
    </div>
  )
}

export default Members;