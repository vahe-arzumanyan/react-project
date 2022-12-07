import React, {useRef} from "react";
import './style.scss'

const UseRefEvent = () => {
    const changeBorder = useRef();
    const inputRef = useRef();

    const handleCLick = () => {
        if (inputRef.current) {
            inputRef.current.focus();
            inputRef.current.style.borderColor = 'red';
        }
    }

    const changeInput = () => {
        if (inputRef.current) {
            inputRef.current.style.borderColor = 'red';
        }
    }


    return <div>
        <div className={'G-flex P-focus'}>
            <label>
                <input type='text'
                       className={'P-input-focus'}
                       ref={inputRef}
                       onChange={changeInput}/>
            </label>
            <button className={'P-btn-focus'} onClick={handleCLick}>click</button>
        </div>

    </div>
}

export default UseRefEvent;