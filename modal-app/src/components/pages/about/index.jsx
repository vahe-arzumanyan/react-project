import React from "react";
import './style.scss';
import StaticTitle from "../../header-static-title";
import person1 from '../../../assets/image/person/about-01.jpg';
import person2 from '../../../assets/image/person/about-02.jpg';
import person3 from '../../../assets/image/person/about-03.jpg';
import person4 from '../../../assets/image/person/about-04.jpg';
import People from "../about/people/index";




class About extends React.Component {

    state = {
        person: [
            {
                'img': person1,
                'alt': 'img person',
                'name': 'Jennifer Solf',
                'position': 'Founder and CEO',
                'info': 'Vivamus cursus leo nec sem feugiat sagittis. Duis ut feugiat odio, sit amet accumsan odio.',
                'f': 'icon-facebook',
                't':'icon-twitter',
                'i':'icon-instagram'
            },
            {
                'img': person2,
                'alt': 'img person',
                'name': 'Daisy Walker',
                'position': 'Executive Chef',
                'info': 'Praesent non vulputate elit. Orci varius natoque et magnis dis parturient, nascetur ridiculus mus.',
                'f': 'icon-facebook',
                't':'icon-twitter',
                'i':'icon-instagram'
            },
            {
                'img': person3,
                'alt': 'img person',
                'name': 'Florence Nelson',
                'position': 'Kitchen Manager',
                'info': 'Aenean sapien sem, ultricies sed vulputate et, auctor vel mauris. Integer sit amet diam eget est facilisis lacinia vitae.',
                'f': 'icon-facebook',
                't':'icon-twitter',
                'i':'icon-instagram'

            },
            {
                'img': person4,
                'alt': 'img person',
                'name': 'Valentina Martin',
                'position': 'Culinary Director',
                'info': 'Praesent non vulputate elit. Orci varius natoque penatibus et magnis montes, nascetur ridiculus mus.',
                'f': 'icon-facebook',
                't':'icon-twitter',
                'i':'icon-instagram'

            }
        ]
    }
    render() {
        return <>

            {/* ================================== static title ==================================*/}

            <section className={'P-home-title-info'}>
                <StaticTitle title="About Simple House"
                             description='This is about page of simple house template. You can modify and use this HTML template for your website. Total 3 HTML pages included in this template. Header image has a parallax effect.'/>
            </section>

        {/* ================================== img section ==================================*/}

            <section className={'G-container'}>
                <div className={'P-w'}>
                    {this.state.person.map((x, index)=>(
                        <People
                            key={index}
                            person={x}
                        />
                    ))}
                </div>

            </section>

        </>

    }
}

export default About;