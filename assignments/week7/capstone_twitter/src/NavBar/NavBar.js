import React from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../../providers/AuthProvider';
import './navbar.css';

const Navbar = ({handleUserLogout}) => {
    return (
        <div>
            <ul className='navbar-container'>
                <Link to='/' className='links'> ProfileScreen </Link>
                <Link to='/tweets' className='links'> TweetItem </Link>
                <Link to='/login' className='links'> LoginScreen </Link>
                <Link to='/login'><button className='logout-button' onClick={handleUserLogout}> Log Out </button></Link>
            </ul>
        </div>
    );
}

export default withAuth(Navbar);