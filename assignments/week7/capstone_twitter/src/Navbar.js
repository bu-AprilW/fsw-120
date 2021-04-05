import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/Explore">Explore</Link>
            <Link to="/Notifications">Notifications</Link>
            <Link to="/Profile">Profile</Link>
        </div>
    )
}

export default Navbar