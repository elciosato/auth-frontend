import React, { useState } from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import { UserActivation } from '../actions/auth';

export function Activate({ match, UserActivation }) {
    const [isActivated, setIsActivated] = useState(false);

    function handleActivation() {
        const uid = match.params.uid;
        const token = match.params.token;
        
        UserActivation(uid, token);
        setIsActivated(true);
    }
    
    if (isActivated) {
        return <Redirect to='/' />
    }
    return (
        <div className='container'>
            <div className='d-flex flex-column justifi-content-center align-items-center'>
                <h1>Activation</h1>
                <button
                    type='button'
                    className='btn btn-primary mt-5'
                    onClick={handleActivation}
                >
                    OK
                </button>
            </div>
        </div>
    );
}


export default connect(null, { UserActivation })(Activate)