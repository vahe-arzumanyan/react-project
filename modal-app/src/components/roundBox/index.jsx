import React, {useEffect, useState} from "react";
import './style.scss';

const RoundBox = () => {
    const [changeBgColor, setChangeBgColor] = useState([]);
    const [windLoader, setWinLoader]=useState(true)

    const handelChangeBgColor = () => {
        if (setWinLoader.length) {
            setWinLoader(false)
        }

    }

    useEffect(() => {

        setWinLoader(windLoader)

        setChangeBgColor([
            {
                name: 'uf you want change background color',
                info: 'then ...'
            }
        ])

    })






    return <div className={'G-container G-flex G-center'}>
        <div className={'P-random-box G-flex G-center G-flex-column'}>

            <button onClick={handelChangeBgColor}>click me</button>
        </div>
    </div>


}

export default RoundBox;

