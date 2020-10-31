import React, { Component } from 'react';
import NavbarRight from "./NavbarRight"
import NavbarLeft from "./navbarLeft"
import "./navbar.css"

class MainNavbar extends Component {
    
  
    render() {
        const {products } = this.props
        
        return (
            <nav className="main-navbar">
                <div className="container">
                    <NavbarRight
                        products={products}
                    />
                    < NavbarLeft products={products}/>
                </div>
            </nav>
        );
    }
}

export default MainNavbar;



