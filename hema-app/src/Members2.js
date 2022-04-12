import './Members2.css';
import React from 'react';
import { useRef, useEffect, useState } from 'react';

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
          <div className="Display">
            
          </div>
        )
      })}  
    </div>
  );
} // 실제 표시되는 부분(사진, 내용)

export default Members;