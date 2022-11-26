import React from "react";
import './style.scss'
import Box from '../box/index'
// import Modal from '../modal/index'


const Top = () => {


    let randomBgColor = `rgba(${Math.random() * 255},${Math.random() * 255}, ${Math.random() * 255},${Math.random()})`
    // let arr = [];
    const handleClick = () => {
    }


    return <>
        <div className={'G-flex'}>
            <div className={'P-top-section'} style={{backgroundColor: `${randomBgColor}`}}>
                <button onClick={handleClick}>Add Box</button>
            </div>
        </div>
    </>

}


export default Top;