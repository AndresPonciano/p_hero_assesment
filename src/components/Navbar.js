import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    render() {
        return (
            <>
            <nav className="navbar is-light" role="navigation">
                <Link to="/" className="navbar-item">
                    Home
                </Link>
                <Link to="/savedvideos" className="navbar-item">
                    Saved videos
                </Link>
            </nav>
            </>
        ) 
    }
}

export default Navbar;