import React from "react";
import './style.scss'
import Box from '../box/index'
import Left from '../left/index'
// import Modal from '../modal/index'


const Top = () => {

    let arrayBox = [];
    arrayBox.map((item) => {
        return (
            <Left>{item}</Left>
        )
    })

    let randomBgColor = `rgba(${Math.random() * 255},${Math.random() * 255}, ${Math.random() * 255},${Math.random()})`

    const handleClick = () => {
    }


    return <>
        <div className={'G-flex'}>
            <div className={'P-top-section'} style={{backgroundColor: `${randomBgColor}`}}>
                <button onClick={handleClick}>Add Box</button>
            </div>

            arrayBox.map((item) => {
            return(
            <Left>
            key={item}
            </Left>
            )

        }


        </div>
    </>

}


export default Top;