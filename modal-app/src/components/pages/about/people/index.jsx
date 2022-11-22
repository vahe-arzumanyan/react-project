import React from "react";
import './style.scss';

class People extends React.Component {
    render() {
        return <section className={'G-flex P-person-box'}>
                <div className={'G-image-cover P-img-person'} style={{backgroundImage: `url('${this.props.person.img}')`}}
                     alt={this.props.person.alt}/>
                <div className={'G-flex G-flex-column'}>
                    <div className={'P-person-info'}>
                        <p className={'P-person-name'}>{this.props.person.name}</p>
                        <h3 className={'P-person-position'}>{this.props.person.position}</h3>
                        <h3 className={'P-person-text'}>{this.props.person.info}</h3>
                    </div>
                    <div className={'G-flex P-person-social'}>
                        <ul className={'G-flex'}>
                            <li className={`${this.props.person.f}`}></li>
                            <li className={`${this.props.person.t}`}></li>
                            <li className={`${this.props.person.i}`}></li>
                        </ul>
                    </div>

                </div>

        </section>


    }

}

export default People;