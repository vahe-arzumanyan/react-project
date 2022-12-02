import React, {useEffect, useState} from "react";
import './style.scss';
import Lo from "../Lo";

const RoundBox = () => {
    const [changeBgColor, setChangeBgColor] = useState([]);
    const [windLoader, setWinLoader] = useState(true)

    const handelChangeBgColor = () => {
        setWinLoader(false)
        }

    useEffect(() => {

     if (!windLoader) {

         setChangeBgColor([
                 {
                     name: 'uf you want change background color',
                     info: 'then ...'
                 }
             ]
         )

     }})


    return <div className={'G-container G-flex G-center'}>
        <div className={'P-random-box G-flex G-center G-flex-column'}>
                {changeBgColor ? setChangeBgColor.map((index, item) => {
                    return <Lo key={index}
                               data={item}
                    />
                }) : null}


                <button onClick={handelChangeBgColor}>click me</button>
            </div>
    </div>

        }

        export default RoundBox;

