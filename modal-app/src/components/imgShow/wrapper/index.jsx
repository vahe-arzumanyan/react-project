import React from "react";
import './style.scss'

const Wrapper = ({data}) => {
    return <div className={'G-container'}>
        <div className={'G-flex G-flex-wrap'}>
            <div style={{backgroundColor:`${data.item}`}} className={'G-image-cover hh'}>
            </div>
        </div>
        </div>
        }

        export default Wrapper;