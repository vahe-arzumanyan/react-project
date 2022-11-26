import React from "react";
import './style.scss'
import Box from '../box/index'
import Left from '../left/index'
// import Modal from '../modal/index'


const Top = () => {


    let randomBgColor = `rgba(${Math.random() * 255},${Math.random() * 255}, ${Math.random() * 255},${Math.random()})`
    let arrBox = [];
    const handleClick = () => {
    }


    return <>
        <div className={'G-flex'}>
            <div className={'P-top-section'} style={{backgroundColor: `${randomBgColor}`}}>
                <button onClick={handleClick}>Add Box</button>
            </div>
              <left>
                  {arr.map((arrBox)=>{
                      <div>arrBox.push(item)</div>
                  })}
              </left>
                })}

        </div>
    </>

}


export default Top;