import React from "react";
import './style.scss'

class Product extends React.Component {
    state = {
        productList: [],
        productBox: {
            name: '',
            price: ''
        }
    }

    handleProductName = (e) => {
        this.setState({productBox: {...this.state.productBox, name: e.target.value}})

    }
    handleProductPrice = (e) => {
        this.setState({productBox: {...this.state.productBox, price: e.target.value}})
    }

    handleGetValue = () => {
        const {productBox} = this.state
        this.setState({
            productList: [...this.state.productList, productBox], productBox: {
                name: '',
                price: ''
            }
        })
    }

    render() {
        return (
            <div className={'P-product'}>
                <div className={'G-flex'}>
                    <label className={'G-flex'}>
                        <p>text</p>
                        <input type='text' value={this.state.productBox.name} className={'P-input-product'}
                               onChange={this.handleProductName}/>
                    </label>
                    <label className={'G-flex'}>
                        <p>number</p>
                        <input type='number' value={this.state.productBox.price} className={'P-input-product'}
                               onChange={this.handleProductPrice}/>
                    </label>
                    <button className={'P-product-btn'} onClick={this.handleGetValue}>enter</button>
                </div>

                {/* ====================== logic ====================== */}

                <div className={'P-product-box'}>
                    {this.state.productList.map((item, index) => {
                        return <div kay={index}>
                            <h2>{item.name}</h2>
                            {item.price < 10000 ? <div>
                                <p>product name</p>
                                {item.price}
                            </div> : <div>
                                <p>old price <i>{item.price}</i></p>
                                <p>new price {item.price - item.price * 10 / 100}</p>
                            </div>
                            }
                        </div>
                    })}
                </div>
            </div>
        );
    }
}

export default Product;