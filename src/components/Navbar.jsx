import React from 'react';
import { NavLink } from 'react-router-dom';
import { userData } from '../store/UserContext';

const Navbar = () => {
    const { handleLogout } = userData()
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'))
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Account Manage</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        {loggedInUser ? (
                            <button className="btn btn-primary btn-block" onClick={handleLogout}>Logout</button>
                        ) :
                            (
                                <div className='navbar-nav ms-auto'>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/">Login</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/register">Register</NavLink>
                                    </li>
                                </div>
                            )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;