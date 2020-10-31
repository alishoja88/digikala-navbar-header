import React, { Component } from 'react';
import DigiProducts from "../../listProducts/DigiProducts"
import NavbarMenu from "./NavbarMenu"
import "../responsive-mobile/Respons.css"

class Respons extends Component {
    state = {
        products: DigiProducts,
        toggelNavbarMenu: false
    }

    showNavbarMenu = () => {
        this.setState({
            toggelNavbarMenu: true
        })
    }

    hideNavbarMenu = () => {
        this.setState({
            toggelNavbarMenu: false
        })
    }
    render() {

        return (
            <div className="responsiv-digikala">
                <div className="header-respons">
                    <div className="header-top-respos">
                        <div className="navbar-respons">
                            <i className="fa fa-bars" onClick={this.showNavbarMenu}></i>
                        </div>
                        <div className="logo-respons">
                            <img style={this.state.toggelNavbarMenu ? { display: "none" } : { display: "flex" }} src={require("./logo-respons/122.svg")} alt="digikala" />
                        </div>
                        <div className="question-respons">
                            <i className="fa fa-question-circle-o"></i>
                        </div>
                    </div>
                    <div className="search-login-respons">
                        <div className="serach-respons">
                            <input type="text" className="search-input-respons" placeholder="جستجو از میان 1.000.000 + کالا" />
                            <i className="fa fa-search"></i>
                        </div>
                        <div className="shop-backet-respons">
                            <i className="fa fa-shopping-cart"></i>
                        </div>
                        <div className="login-respons">
                            <i className="fa fa-user"></i>
                        </div>
                    </div>
                    <NavbarMenu
                        showNavbar={this.state.toggelNavbarMenu}
                        products={this.state.products} />
                    <div className="select-city">
                        <a className="link-select-city" href="#">لطفا شهر و استان خود را انتخاب کنید</a>
                        <i className='fas fa-map-marker-alt'></i>
                    </div>
                    <div className="overly" onClick={this.hideNavbarMenu} style={this.state.toggelNavbarMenu ? { display: "block" } : { display: "none" }}></div>

                </div>

               

            </div>
        );
    }
}

export default Respons;