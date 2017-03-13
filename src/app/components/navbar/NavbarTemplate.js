import React from 'react';
import { Link, IndexLink } from 'react-router';

const NavbarTemplate = (props) => {
    return (
        <div>
            <IndexLink to="/"> <i aria-hidden="true"></i> Home </IndexLink> |
            <Link to="/about"> <i aria-hidden="true"></i> About </Link>      |
            <Link to="/form"> <i aria-hidden="true"></i> Form </Link>      |
            <Link to="/manage"> <i aria-hidden="true"></i> Manage Resources </Link> 
        </div>
    );
};

export default NavbarTemplate;
