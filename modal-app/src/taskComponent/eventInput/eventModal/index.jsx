import React from "react";
import './style.scss'

const EventModal = (data, isShow) => {
    return <div className={`P-event-modal-hide ${isShow ? 'P-event-modal-show' : ''} `}>
                {data.inputValue ? <p className={'P-event-box G-flex G-center'}>{data.inputValue}</p> : ''}
        </div>

}

export default EventModal;