import React from 'react';
import GoogleAuth from './GoogleAuth';

class Header extends React.Component {
    render() {
        return (
        <>
            <nav className="navbar is-danger">
                hi
                <div className="navbar-end">
                    <div className="navbar-item">
                        <GoogleAuth/>
                    </div>
                </div>
            </nav>
        </>
        )
    }
}

export default Header;