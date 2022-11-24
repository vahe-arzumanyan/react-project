import React from "react";
import './style.scss';
import StaticTitle from '../../components/header-static-title/index';
import FoodBoxList from '../../pages/home/foodBoxList/index';
import img1 from '../../assets/image/foodList/01.jpg';
import img2 from '../../assets/image/foodList/02.jpg';
import img3 from '../../assets/image/foodList/03.jpg';
import img4 from '../../assets/image/foodList/04.jpg';
import img5 from '../../assets/image/foodList/05.jpg';
import img6 from '../../assets/image/foodList/06.jpg';
import img7 from '../../assets/image/foodList/07.jpg';
import img8 from '../../assets/image/foodList/08.jpg';
import avocado from '../../assets/image/img-01.jpg';


class Home extends React.Component {

    state = {
        products: [
            {
                'img': img1,
                'alt': 'img',
                'header': 'Fusce dictum finibus',
                'description': "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
                'price': '45$ / $55',
                category: 'Salad'
            },
            {
                'img': img2,
                'alt': 'img',
                'header': 'Aliquam sagittis',
                'description': "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
                'price': '45$ / $55',
                category: 'Salad'
            },
            {
                'img': img3,
                'alt': 'img',
                'header': 'Sed varius turpis',
                'description': "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
                'price': '45$ / $55',
                category: 'Noodle'
            },
            {
                'img': img4,
                'alt': 'img',
                'header': 'Fusce dictum finibus',
                'description': "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
                'price': '45$ / $55',
                category: 'Salad'
            },
            {
                'img': img5,
                'alt': 'img',
                'header': 'Aliquam sagittis',
                'description': "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
                'price': '45$ / $55',
                category: 'Noodle'
            },
            {
                'img': img6,
                'alt': 'img',
                'header': 'Fusce dictum finibus',
                'description': "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
                'price': '20$ / 40$ / 60$',
                category: 'Noodle'
            },
            {
                'img': img7,
                'alt': 'img',
                'header': 'Quisque et felis eros',
                'description': "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
                'price': '$94',
                category: 'Pizza'
            },
            {
                'img': img8,
                'alt': 'img',
                'header': 'Quisque et felis eros',
                'description': "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
                'price': '$15',
                category: 'All'
            }
        ],
        filterFood: [],
        activeFoodTab: 'All'
    }

    selectMenuPage = (menuName) => {
        let newCategory = []
        if (menuName !== 'All') {
            newCategory = this.state.products.filter(x => x.category === menuName)
        } else {
            newCategory = this.state.products;
        }
        this.setState({filterFood: newCategory, activeFoodTab: menuName})
    }


    render() {
        return <>
            {/* ================================== static title ================================== */}
            <section className={'G-container'}>
                <StaticTitle title="Welcome To Simple House"
                             description='Total 3 HTML pages are included in this template. Header image has a parallax effect. You can feel free to download, edit and use this TemplateMo layout for your commercial or non-commercial websites.'/>
                {/* ================================== section 1 ==================================*/}
            </section>
            <section className={'G-container'}>
                <div className={"G-flex G-center P-category-list"}>
                    <ul className={'G-flex'}>
                        <li className={`${this.state.activeFoodTab === 'All' ? 'menu-page' : ""}`}
                            onClick={() => this.selectMenuPage('All')}>All
                        </li>
                        <li className={`${this.state.activeFoodTab === 'Pizza' ? 'menu-page' : ""}`}
                            onClick={() => this.selectMenuPage('Pizza')}>Pizza
                        </li>
                        <li className={`${this.state.activeFoodTab === 'Salad' ? 'menu-page' : ""}`}
                            onClick={() => this.selectMenuPage('Salad')}>Salad
                        </li>
                        <li className={`${this.state.activeFoodTab === 'Noodle' ? 'menu-page' : ""}`}
                            onClick={() => this.selectMenuPage('Noodle')}>Noodle
                        </li>
                    </ul>
                </div>
                {/* ================================== section 2 ==================================*/}
            </section>
            <section className={'G-container'}>
                <div className={'G-flex G-center G-flex-wrap G-justify-between'}>
                    {this.state.filterFood.map((item, index) => (
                        <FoodBoxList
                            box={item}
                            key={index}
                        />
                    ))
                    }
                </div>
            </section>
            <section className={'G-container'}>
                <div className={'G-flex G-flex-row P-avocado-content'}>
                    <div className={'G-image-cover P-img-avocado'} style={{backgroundImage: `url('${avocado}')`}}></div>
                    <div className={'G-flex G-flex-column P-avocado-info'}>
                        <p className={'P-avocado-title'}>Maecenas nulla neque</p>
                        <h3 className={'P-avocado-text'}>Redistributing this template as a downloadable ZIP file on any
                            template collection site is strictly prohibited. You will need to talk to us for additional
                            permissions about our templates. Thank you.</h3>
                    </div>
                </div>
            </section>

            {/* ================================== footer ================================== */}



        </>
    }
}

export default Home;