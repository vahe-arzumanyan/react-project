import React from "react";
import './style.scss'
import Modal from '../modal/index'
import Box from '../box/index'
import Lorem from "../right";

const Top = () => {

    let randomBgColor = `rgba(${Math.random() * 255},${Math.random() * 255}, ${Math.random() * 255},${Math.random()})`
    let addBox = <Box/>

    const handleClick = () => {

        console.log('sd')
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