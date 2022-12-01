import React from "react";
import './style.scss'

const EventModal = ({data, isShow}) => {
    return <div className={` ${isShow ? 'P-show' : 'P-hide' }`}>
            <p>{data}</p>

        </div>


}

export default EventModal;