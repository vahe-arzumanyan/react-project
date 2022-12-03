import React, {useEffect, useState} from "react";
import './style.scss';
import Wrapper from "./wrapper";





const ShowImg = () => {

    const [showWrapper, setShowWrapper] = useState();


    useEffect(() => {

        setTimeout(() => {
            setShowWrapper([
                {
                    width:'300px',
                    height:'200px',
                    padding:'15px',
                    bgColor:'blue',
                },
                {
                    width1:'300px',
                    height1:'200px',
                    padding:'15px',
                    bgColor:'red',

                },
                {
                    width2:'600px',
                    height2:'200px',
                    padding2:'15px',
                    bgColor2:'red',

                },
                {
                    width3:'300px',
                    height3:'400px',
                    padding3:'15px',
                    bgColor3:'red',

                },
                {
                    width4:'100px',
                    height4:'200px',
                    padding4:'15px',
                    bgColor4:'red',

                }
            ])
        }, 3000)
    }, [])


    return <div className={'G-container'}>
        {showWrapper.length ? showWrapper.map((item, index)=>{
            return <Wrapper
            kay={index}
            data={item}
            />
        }): <h3>loading</h3>}
    </div>
}

export default ShowImg;