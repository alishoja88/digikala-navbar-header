import React, { Component } from 'react';
import ListProduct from "./ListProduct"

class NavbarMenu extends Component {
    state = {
        toggel: -1,
        toggelIcon: false
    }
    handelShowMenuToggel = (index) => {

        this.setState({
            toggel: index,
            toggelIcon: !this.state.toggelIcon,
        })
    }


    render() {
        const styleShowNavbar = {
                transition: "transform 0.3s cubic-bezier(0.4, 0, 1, 1) 0s",
                transform:" translateX(0px)",
                
        }
        const styleHidenNavbar = {
                transition: "transform 0.3s cubic-bezier(0.4, 0, 1, 1) 0s",
                transform:" translateX(260px)",
              
        }
        const { products } = this.props

        return (
            <nav className="toggel-navbar" style={this.props.showNavbar ? styleShowNavbar :styleHidenNavbar}>
                <div className="toggel-logo">
                    <img src={require("./logo-respons/122.svg")} alt="digikala" />
                </div>
                <div className="divaider"></div>
                <div className="toggel-main-list-product-respons">
                    <ul className="main-list-product-respons">
                        <li className="item-main-list-product-respons">
                            <a className="link-main-list-product-respons" href="#">دیجی کلاب</a>
                            <img src={require("./logo-respons/5ca024e6.svg")} />
                        </li>
                        <li className="item-main-list-product-respons">
                            <a className="link-main-list-product-respons" href="#">دیجی کالای من</a>
                            <img src={require("./logo-respons/5ca024e6.svg")} alt="" />
                        </li>
                        <li className="item-main-list-product-respons">
                            <a className="link-main-list-product-respons" href="#">پیشنهاد ها و تخفیف ها
                               <i className="fa fa-plus-circle"></i>
                            </a>
                        </li>
                        <div className="divaider"></div>
                        {products[0].submenu.map((item, index) => (
                            <li className="item-main-list-product-respons" key={item.id}>
                                <a className="link-main-list-product-respons" href="#">{item.titel}
                                    <i onClick={() => this.handelShowMenuToggel(index)} className="fa fa-plus-circle"></i>
                                    {this.state.toggel === index
                                        &&
                                        <ListProduct
                                            ListProductItem={products[0].submenu[index].submenu[0]}
                                            toggelIcon={this.state.toggelIcon}
                                        />
                                    }
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        );
    }
}

export default NavbarMenu;