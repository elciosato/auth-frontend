import React, { useState } from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import { reset_password_confirm } from '../actions/auth';

export function ResetPasswordConfirm({ match, reset_password_confirm }) {
    const [hasRequestSent, setHasRequestSent] = useState(false);

    const [formData, setFormData] = useState({
        new_password: '',
        re_new_password: ''
    });

    const { new_password, re_new_password } = formData;

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        const uid = match.params.uid;
        const token = match.params.token;

        reset_password_confirm(uid, token, new_password, re_new_password);
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
                        type="password"
                        placeholder="New Password"
                        name="new_password"
                        value={new_password}
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
                        name="re_new_password"
                        value={re_new_password}
                        onChange={e => onChange(e)}
                        minLength="6"
                        required
                    />
                </div>
                <button className='btn btn-primary' type='submit'>Reset Password</button>
            </form>
        </div>
    );
}


export default connect(null, { reset_password_confirm })(ResetPasswordConfirm)