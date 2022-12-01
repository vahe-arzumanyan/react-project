import React, {useState} from "react";
import './style.scss'
import EventModal from "./eventModal";

const EventBtn = () => {
    const [inputValue, setInputValue] = useState('');
    //btn event// const [btnUserName, setBtnUserName] = useState('')
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
        {isShow && <EventModal data={inputValue} isShow = {isShow} />}
    </div>
}

export default EventBtn;
