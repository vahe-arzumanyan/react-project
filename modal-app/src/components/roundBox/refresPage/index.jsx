import React from "react";
import './style.scss'


const RefreshPage = ({data}) => {

    return <div className={'P-random-box'} style={{backgroundColor: `${data.bgColor}`}}>
    <div className={'G-flex G-flex-column'}>
        <p>{data.name}</p>
        <p>{data.info}</p>
    </div>
    </div>

}

export default RefreshPage;