import React, {useEffect, useState} from "react";
import './style.scss';
import Wrapper from "./wrapper/index";
import img1 from '../../assets/image/img (1).jpg'
import img2 from '../../assets/image/img (2).jpg'
import img3 from '../../assets/image/img (3).jpg'
import img4 from '../../assets/image/img (4).jpg'
import img5 from '../../assets/image/img (5).jpg'
import img6 from '../../assets/image/img (6).jpg'


const ShowImg = () => {

    const [showWrapper, setShowWrapper] = useState([]);


    useEffect(() => {

        setTimeout(() => {
            setShowWrapper([
                {
                   img1:'img1'
                },
                {
                    img2:'img2'
                },
                {
                    img3:'img3'
                },
                {
                    img4:'img4'
                },
                {
                    img5:'img5'
                },
                {
                    img6:'img6'
                }
            ])
        }, 3000)
    }, [showWrapper])


    return <div className={'G-container'}>
        {showWrapper.length ? showWrapper.map((item, index) => {
            return <Wrapper
                key={index}
                data={item}
            />
        }) : <h3>loading ....</h3>}
    </div>
}

export default ShowImg;