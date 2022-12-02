import React, {useState} from "react";
import './style.scss'
import EventModal from "./eventModal";

const EventBtn = () => {
    const [inputValue, setInputValue] = useState('');
    const [isShow, setIsShow] = useState(false)


    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleBtnClick = () =>{
       setIsShow(!isShow)
    }

    return <div>
        <div className={'G-flex P-event-content'}>
            <label className={'G-flex'}>
                <p>type name</p>
                <input type="text" value={inputValue} onChange={handleChange} className={'P-input'}/>
            </label>
            <button onClick={handleBtnClick}>enter</button>
        </div>
        <div className={'G-container G-flex G-center'}>
            {isShow && inputValue ?  <EventModal data={inputValue} isShow = {isShow} /> : ''}
        </div>
    </div>
}

export default EventBtn;
