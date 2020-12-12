import React, { Fragment } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
import './NavBar.scss'

const Navbar = ({ isAuthenticated, logout }) => {
    const authLinks = (
        <li className="nav-item">
            <Link className='nav_options' onClick={logout} to='/'>Logout</Link>
        </li>
    );

    const guestLinks = (
        <Fragment>
            <li className="nav-item">
                <NavLink className="nav_options" exact to='/login'>Login</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav_options" exact to='/signup'>Sign Up</NavLink>
            </li>
        </Fragment>
    );

    return (
        <nav className="navbar-header">
            <Link className="header_logo" to='/'>PokeDex</Link>
            <div className="new-nav">
                <ul className="nav_options">
                    <li className="nav-item">
                        <NavLink className="nav_options" exact to='/'>Home</NavLink>
                    </li>
                    { <Fragment>{ isAuthenticated ? authLinks : guestLinks }</Fragment> }
                </ul>
            </div>
        </nav>
    );
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { logout })(Navbar);