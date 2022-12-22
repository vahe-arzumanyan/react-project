import React from "react";
import './style.scss'
import {NavLink, Route, Routes} from "react-router-dom";
import School from "../../pages/school";
import Teacher from "../../pages/teachers";
import Pupil from "../../pages/pupils";

const Home = () => {
    return <div className={'P-top-ui G-flex G-center'}>
        <p>Schools administration</p>


        <Routes>

            <Route path={"/School"} element={<School/>} />
            <Route path={"/Teachers"} element={<Teacher/>} />
            <Route path={"/Pupil"} element={<Pupil/>} />
            <Route path= "*" element={<School/>}/>
        </Routes>
    </div>
}

export default Home;