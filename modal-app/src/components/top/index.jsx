import React from "react";
import './style.scss'

const Top = () =>{

    let x =  `rgba(${Math.random() * 255},${Math.random() * 255}, ${Math.random() * 255},${Math.random()})`
    const handleClick = ()=>{
       alert('sd');
    }

    return <> <div>
        <div className={'P-top-section'} style={{backgroundColor:`${x}`}}>
            <button onClick={handleClick}>Add Box</button>
        </div>
    </div>

    </>
}

export default Top;