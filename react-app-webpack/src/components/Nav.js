import React from 'react';
import { Link } from '@gatsbyjs/reach-router';

const Nav = () => (
    <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact-us">Contact</Link>
    </div>
)

export default Nav;