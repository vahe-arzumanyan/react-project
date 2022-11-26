import React, {useEffect, useState} from "react";
import './style.scss'
import Box from '../box/index'
import Left from '../left/index'
// import Modal from '../modal/index'


const Top = () => {

    const [numbersList, setNumbersList] = useState([])


    let randomBgColor = `rgba(${Math.random() * 255},${Math.random() * 255}, ${Math.random() * 255},${Math.random()})`

    const handleClick = () => {
        let randomNum = Math.floor(Math.random() * 999 + 1)
        setNumbersList([...numbersList,randomNum]);
    }

    return <>
        <div className={'G-flex'}>
            <div className={'P-top-section'} style={{backgroundColor: `${randomBgColor}`}}>
                <button onClick={handleClick}>Add Box</button>
            </div>
            <Box>
                {console.log(numbersList)}
                {numbersList.map((item, index) => {
                        return <div key={index}>
                            {item}
                        </div>
                    })
                }
            </Box>
        </div>
    </>

}


export default Top;