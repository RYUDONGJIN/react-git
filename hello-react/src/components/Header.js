import React from 'react';
import { Link } from 'react-router';

const MenuItem = ({active, children, to}) => (
    <NavLink exact to={to} className="menu-item">
            {children}
    </NavLink>
)

const Header = () => {
    return (
        <div>
            <div className="logo">
                velopert
            </div>
            <div className="menu">
                <MenuItem to={'/'}>홈</MenuItem>
                <MenuItem to={'/about'}>소개</MenuItem>
                <MenuItem to={'/post'}>포스트</MenuItem>
            </div>
        </div>
    );
};

export default Header;