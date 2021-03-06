import React from 'react';
import {Link} from 'react-router-dom';
import './styles.css';

class NavBar extends React.Component {
    render() {
        return (
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/services">Services</Link>
            </nav>
        );
    }
}

export default NavBar;