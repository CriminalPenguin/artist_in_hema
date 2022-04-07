import './Members.css';
import React from 'react';
import { useRef, useEffect, useState } from 'react';

import dummy from "./data/data.json"

const 가입년도=['91','92','93','94','95',
              '96','97','98','99','00',
              '01','02','03','04','05']

const 가입년도2=['06','07','08','09','10',
              '11','12','13','14','15',
              '16','17','18','19','20']

const 일이학번 = dummy.members.filter(function(element){
  return element.join == 2012;
})

function Members() {
  return(
    <div>
      <Div1></Div1>
      <Div2></Div2>
    </div>
  );
}

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
}

function Div2() {
  return(
    <div className="Main">
      <Left></Left>
      <Right></Right>
    </div>
  );
}

function Left() {
  return(
    <div className="Members">
      <div className="Photo"><img src={require("./sample/1.jpeg")}></img></div>
      <div className="AboutR">
        <div>{일이학번[0].join}, we got {일이학번[0].ename}</div>
        <div>{일이학번[0].class}</div>
        <div>{일이학번[0].session}</div>
        <div>{일이학번[0].band}</div>
      </div>
    </div>
  )
}

function Right() {
  return(
    <div className="Members">
      <div className="AboutL">
        <div>{일이학번[1].join}, we got {일이학번[1].ename}</div>
        <div>{일이학번[1].class}</div>
        <div>{일이학번[1].session}</div>
        <div>{일이학번[1].band}</div>
      </div>
      <div className="Photo"><img src={require("./sample/2.jpeg")}></img></div>
    </div>
  )
}

export default Members;