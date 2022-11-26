import React from "react";
import './style.scss';

const Box = () => {


const closeRandomBox = ({handleClick}) =>{

}

    return <>
        <div className={'P-box-wrapper'}>
            <div className={'P-box G-flex G-flex-column G-center'}>
                <button onClick={closeRandomBox} className={'P-box-close'}>Close</button>

            </div>
        </div>

    </>
}

export default Box;