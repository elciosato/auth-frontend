import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import { reset_password } from '../actions/auth';

export function ResetPassword({ reset_password }) {
    const [hasRequestSent, setHasRequestSent] = useState(false);

    const [formData, setFormData] = useState({
        email: ''
    });

    const { email } = formData;

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        reset_password(email);
        setHasRequestSent(true);
    }

    // Is the user authenticated?
    // Redirect them to the Home page
    if (hasRequestSent) {
        return <Redirect to='/' />
    }

    return (
        <div className='container mt-5'>
            <h1>Request Password Reset</h1>
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
                <button className='btn btn-primary' type='submit'>Reset Password</button>
            </form>
            <p className='mt-3'>
                Don't have an account? <Link to='/signup'>Sign Up</Link>
            </p>
        </div>
    );
}


export default connect(null, { reset_password })(ResetPassword)