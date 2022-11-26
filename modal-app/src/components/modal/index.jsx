import React from "react";
import './style.scss';

const Modal = () => {


    return <>
        <div className={'G-container G-flex G-center'}>
            <div className={'P-modal G-center'}>
                <div className={'G-flex G-flex-column G-center'}>
                    <p>Do you want delete box ?</p>
                    <div className={'P-input-answer G-flex G-flex-row'}>
                        <div className={'G-flex G-flex-column'}>
                            <label className={'P-label-answer G-flex'}>
                                <p>Yes</p>
                                <input type='radio' value='yes'/>
                            </label>
                        </div>
                        <div className={'G-flex'}>
                            <label className={'P-label-answer G-flex'}>
                                <p>No</p>
                                <input type='radio' value='no'/>
                            </label>
                        </div>

                    </div>
                    <button>CLose</button>
                </div>

            </div>
        </div>


    </>
}

export default Modal;