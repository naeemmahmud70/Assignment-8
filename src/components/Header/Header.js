import React from 'react';
import banner from '../../bg.jpg'
import './Header.css'

const Header = () => {
    return (
        <div className="background-style d-flex justify-content-center align-items-center" style={{ backgroundImage: `url(${banner})` }}>
            <div id="text-style"><h1>English Premier League</h1></div>
        </div>
    );
};

export default Header;