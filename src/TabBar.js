import React from 'react';
import logo from './logowhiskey.png';

function TabBar() {
    return (
        <div className="TabBar">
            <img src={logo} className="TabBar-logo" alt="logo" />
            <h1 className="TabBar-title">DrinkMastersAI</h1>
        </div>
    );
}

export default TabBar;