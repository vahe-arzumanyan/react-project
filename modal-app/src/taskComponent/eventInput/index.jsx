import React, {useState} from "react";
import './style.scss'
import EventModal from "./eventModal";

const EventBtn = () => {
    // const = [contentInfo, setContentInfo] = useState(null)
    const [inputValue, setInputValue] = useState('');
    //btn event
    const [btnUserName, setBtnUserName] = useState('')


    // const handleSelect = (selectedType) => {
    //     console.log(selectedType)
    //     let selectedCategory = tapTestData.filter(item => item.categoryId === selectedType)
    //     console.log(selectedCategory)
    //     setContentInfo(selectedCategory[0])
    // }

    const handleResult = (resultType)=>{
        let result = inputValue.filter((item=>result ===resultType))
        (result[0]);
        alert(result)

    }

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleBtnClick = () =>{
        setBtnUserName([btnUserName, inputValue])
        setInputValue('')
    }

    return <div>
        <div className={'G-flex P-event-content'}>
            <label className={'G-flex'}>
                <p>type name</p>
                <input type="text" value={inputValue} onChange={handleChange} className={'P-input-show'}/>
            </label>
            <button onClick={handleBtnClick}>enter</button>
        </div>

    </div>
}

export default EventBtn;
