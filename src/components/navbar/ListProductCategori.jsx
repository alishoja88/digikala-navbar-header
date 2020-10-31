import React, { Component } from 'react';
import ProductCategori from "./ProductCategoti"

class ListProductCategori extends Component {
    state = {
        classNameProduct: true,
        icons: [
            { id: 8, icon: "laptop" },
            { id: 9, icon: "heartbeat" },
            { id: 10, icon: "tools" },
            { id: 11, icon: "tshirt" },
            { id: 12, icon: "couch" },
            { id: 13, icon: "pen" },
            { id: 14, icon: "baby" },
            { id: 15, icon: "campground" },
            { id: 16, icon: "shopping-basket" },
        ],
        hoverdMenu: -1
    }
    handelHoverdProduct = (index) => {
        this.setState({
            hoverdMenu: index
        })
    }
    render() {
        const { products } = this.props
        console.log("ff", products);
        
        return (
            <div className="products-main-list-categori"
                style={this.props.showDislpay ? { display: "flex" } : { display: "none" }}
                onMouseOver={this.props.handelHovered}
                onMouseOut={this.props.handelMouseOut}
            >
                <ul className="list-products-main">
                    {products[0].submenu.map((item, index) => (
                        <li onMouseOver={() => this.handelHoverdProduct(index)}
                            className={this.state.classNameProduct ? `item-products-main item-${item.id}` : ""}
                            key={item.id}>
                            <a
                                href="1" className="link-products-main">
                                <i className={this.state.icons.filter(icon => icon.id === item.id).map(item => `fas fa-${item.icon}`)}></i>
                                {item.titel}
                            </a>
                            {this.state.hoverdMenu === index && <ProductCategori products={products[0].submenu[index].submenu[0]} />}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default ListProductCategori;
