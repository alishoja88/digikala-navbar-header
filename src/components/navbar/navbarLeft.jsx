import React from 'react';

const NavbarLeft = (props) => {
    const { products } = props
    return (
        <div className="navbar-left">
            <ul className="list-navbar-left">
                {products[6].submenu.map(item => (
                    <li key={item.id} className="item-navbar-left">
                        <a className="link-navbar-left">
                            {item.titel}
                        </a>
                    </li>
                ))}
            </ul>

        </div>
    );
}

export default NavbarLeft;