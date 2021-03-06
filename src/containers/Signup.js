import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import { signup } from '../actions/auth';

export function Signup({ signup, isAuthenticated }) {
    const [hasSignupSent, setHasSignupSent] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        name: '',
        password: '',
        re_password: ''
    });

    const { email, name, password, re_password } = formData;

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        if (password === re_password) {
            signup(email, name, password, re_password);
            setHasSignupSent(true);
        }
    }

    // Is the user authenticated?
    // Redirect them to the Home page
    if (isAuthenticated) {
        return <Redirect to='/' />
    }

    if (hasSignupSent) {
        return <Redirect to='/login' />
    }

    return (
        <div className='container mt-5'>
            <h1>Sign Up</h1>
            <p>Create your Account</p>
            <form onSubmit={e => onSubmit(e)}>
                <div className='form-group'>
                    <input 
                        className='form-control'
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={email}
                        onChange={e => onChange(e)}
                        required
                    />
                </div>
                <div className='form-group'>
                    <input 
                        className='form-control'
                        type="text"
                        placeholder="Name"
                        name="name"
                        value={name}
                        onChange={e => onChange(e)}
                        required
                    />
                </div>
                <div className='form-group'>
                    <input 
                        className='form-control'
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={e => onChange(e)}
                        minLength="6"
                        required
                    />
                </div>
                <div className='form-group'>
                    <input 
                        className='form-control'
                        type="password"
                        placeholder="Confirm New Password"
                        name="re_password"
                        value={re_password}
                        onChange={e => onChange(e)}
                        minLength="6"
                        required
                    />
                </div>
                <button className='btn btn-primary' type='submit'>Register</button>
            </form>
            <p className='mt-3'>
                Already have an account? <Link to='/login'>Login</Link>
            </p>
        </div>
    );
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { signup })(Signup)