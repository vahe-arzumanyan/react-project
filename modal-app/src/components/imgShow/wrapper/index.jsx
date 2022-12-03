import React from "react";
import './style.scss'

const Wrapper = ({data}) =>{
    return<div className={'G-container'}>
  <div className={'G-flex G-flex-wrap'}>
      <div>
          <div style={{width:`${data.width}`}}></div>
          <div style={{height:`${data.height}`}}></div>
          <div style={{backgroundColor:`${data.bgColor}`}}></div>
          <div style={{padding:`${data.padding}`}}></div>
      </div>
      <div>
          <div style={{width:`${data.width1}`}}></div>
          <div style={{height:`${data.height1}`}}></div>
          <div style={{backgroundColor:`${data.bgColor1}`}}></div>
          <div style={{padding:`${data.padding1}`}}></div>
      </div>
      <div>
          <div style={{width:`${data.width2}`}}></div>
          <div style={{height:`${data.height2}`}}></div>
          <div style={{backgroundColor:`${data.bgColor2}`}}></div>
          <div style={{padding:`${data.padding2}`}}></div>
      </div>
      <div>
          <div style={{width:`${data.width3}`}}></div>
          <div style={{height:`${data.height3}`}}></div>
          <div style={{backgroundColor:`${data.bgColor3}`}}></div>
          <div style={{padding:`${data.padding3}`}}></div>
      </div>
      <div>
          <div style={{width:`${data.width4}`}}></div>
          <div style={{height:`${data.height4}`}}></div>
          <div style={{backgroundColor:`${data.bgColor4}`}}></div>
          <div style={{padding:`${data.padding4}`}}></div>
      </div>
  </div>
        {console.log(data.width)}
    </div>
}

export default Wrapper