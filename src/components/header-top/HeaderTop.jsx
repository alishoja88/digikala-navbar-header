import React from 'react';
import "./headerTop.css"

const HeaderTop = () => {
    return (
        <div className="header-top">
            <div className="header-top-right">
                <div className="logo">
                    <img src={require("./Logo/122.svg")} />
                </div>
                <div className="header-search-bar">
                    <input className="search-bar-input" type="text" placeholder="... جستجو در دیجی کالا" />
                </div>
            </div>
            <div className="login-account">
                <a href="#" className="login-account-link">ورود به حساب کاربری</a>
            </div>
        </div>
    );
}

export default HeaderTop;
