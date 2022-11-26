import React from "react";
import './style.scss';

const Box = () => {

    let randomNum = Math.floor(Math.random() * 999 + 1)
const closeRandomBox = () =>{
        alert('ssad')
}

    return <>
        <div className={'P-box-wrapper'}>
            <div className={'P-box G-flex G-flex-column G-center'}>
                <button onClick={closeRandomBox} className={'P-box-close'}>Close</button>
                <div>{randomNum}</div>

            </div>
        </div>

    </>
}

export default Box;