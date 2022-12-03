import React, {useEffect, useState} from "react";
import './style.scss';
import RefreshPage from "./refresPage/index";


const RoundBox = () => {
    const [contentBgColor, setContentBgColor] = useState('');
    const [loader, seTLoader] = useState(true)

    const handelChangeBgColor = () => {
        seTLoader(loader);
        window.location.reload();
    }


    useEffect(() => {
        setContentBgColor([
            {
                name: 'uf you want change background color',
                info: 'then ...',
                bgColor: `rgba(${Math.random() * 255},${Math.random() * 255}, ${Math.random() * 255},${Math.random()})`
            }
        ])
    }, [])


    return <div className={'G-container G-flex G-center'}>
        <div className={'G-flex G-center G-flex-column'}>
            {contentBgColor ? contentBgColor.map((item, index) => {
                return <RefreshPage
                    key={index}
                    data={item}
                />
            }) :<p>Loading</p>}


            <button onClick={handelChangeBgColor}>click me</button>
        </div>
    </div>

}

export default RoundBox;

