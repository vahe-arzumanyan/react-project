import React, {useRef, useEffect, useState} from "react";
import './style.scss'

const UseRefRandom = () => {
    const [coordinate, setCoordinate] = useState(0);
    const randomRef = useRef();

    const handleCLick = () => {
        if (randomRef.current) {
            let x = randomRef.current.style.top = Math.floor(Math.random() * 500) + 1 + 'px'
            let y = randomRef.current.style.left = Math.floor(Math.random() * 500) + 1 + 'px'
            console.log(x)
            console.log(y)
        }

    }

    useEffect(() => {
        handleCLick()

    }, [])


    return <div>
        <div className={'G-flex P-random-parent'}>

            <button className={'P-btn-random'} onClick={handleCLick} ref={randomRef}>click</button>
        </div>
        <div>
            <p></p>
        </div>
    </div>
}

export default UseRefRandom;