import React from 'react';
import logo from './../../images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <nav className='nav-item'>
                <a href="/shop">Shope</a>
                <a href="/overview">Order Overview</a>
                <a href="/inventory">Manage Inventory Here</a>
            </nav>
        </div>
    );
};

export default Header;