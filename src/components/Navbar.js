import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/auth';

export function Navbar({ logout, isAuthenticated }) {
    function guestLinks() {
        return (
            <Fragment>
                <Link className='nav-link' to='/login'>Login</Link>
                <Link className='nav-link' to='/signup'>Signup</Link>
            </Fragment>
        );
    }

    function authLinks() {
        return ( 
            <Fragment>
                <a className='nav-link' href='#!' onClick={logout}>Logout</a>
            </Fragment>
        );
    }
    
    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className='container-fluid'>
            <Link className='navbar-brand' to='/'>Auth System</Link>
            <button 
                className='navbar-toggler' 
                type='button' 
                data-bs-toggle='collapse' 
                data-bs-target='#navbarNavAltMarkup' 
                aria-controls='navbarNavAltMarkup' 
                aria-expanded='false' 
                aria-label='Toggle navigation'
            >
                <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
            <div className='navbar-nav'>
                <Link className='nav-link active' aria-current='page' to='/'>Home</Link>
                { (isAuthenticated ? authLinks() : guestLinks()) }
            </div>
            </div>
        </div>
        </nav>
    );
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { logout })(Navbar)