import React from "react";
import './style.scss';
import StaticTitle from "../../header-static-title";


class About extends React.Component {
    render() {
        return (
            <div className={'P-home-title-info'}>
                <StaticTitle title="About Simple House"
                             description='This is about page of simple house template. You can modify and use this HTML template for your website. Total 3 HTML pages included in this template. Header image has a parallax effect.'/>
            </div>
        )

    }
}

export default About;