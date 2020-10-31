import React, { Component } from 'react';
import ListProductCategori from "./ListProductCategori"


class NavbarRight extends Component {
    state = {
        hovered: false,
        icons : [{id : 1 , icon : "bars"}]
    }
    handelHovered = () => {
        this.setState({
            hovered: true
        })
    }
    handelMouseOut = () => {
        this.setState({
            hovered: false
        })
    }
    render() {
        const { products } = this.props
        // console.log("pro", products);

        return (
            <div className="navbar-right">
                <ul className="list-navbar-right">
                    {products.map((item) => {
                        if (item.id === 1) {
                            return <li key={item.id} className="item-navbar-right class-8" onMouseOver={this.handelHovered}
                                onMouseOut={this.handelMouseOut}>

                                <a className="link-class-8" href="#">{item.titel}</a>
                               <i className={this.state.icons.filter(icon => icon.id === item.id).map(item => `fa fa-${item.icon}`)}></i>
                                
                                </li>
                        } else {
                            return <li className="item-navbar-right" key={item.id}>
                                <a className="link-navbar-right" href="#">{item.titel}</a></li>
                        }
                    })}
                </ul>
                <ListProductCategori
                    products={products}
                    showDislpay={this.state.hovered}
                    handelHovered={this.handelHovered}
                    handelMouseOut={this.handelMouseOut}
                />
           
            </div>
        );
    }
}

export default NavbarRight;
