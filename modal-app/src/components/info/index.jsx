import React from "react";
import "./style.scss";

class Index extends React.Component {
    render() {
        return <>
        <div className={'G-container'}>
            <p className={'P-info'}>Chicanery is a free template created by Sadhana Ganapathiraju, aka SimplyGold. It's
                released under
                <a href={"https://www.free-css.com/free-css-templates"}>Creative Commons
                    Attribution-NonCommercial- ShareAlike 2.5 License,</a> which means that you can use it,
                modify it, and pretty much do whatever you want with the files as long as you don't resell it or use it
                for commercial purposes.</p>
            <p className={'P-info'}>If you want to be able to use the templates for commercial purposes, <a href={'#'}>contact me</a>. I included a small link
                at the bottom that says "Design by Sadhana Ganapathiraju." You aren't required to keep it, but if you
                do, it's much appreciated. :-)</p>
        </div>

</>
    }
}

export default Index;