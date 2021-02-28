import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className='container'>
            <div className='.bg-light mt-5'>
                <h1>Welcome to Authentication System</h1>
                <hr className='my-4'/>
                <p>Click the Log In button</p>
                <Link className='btn btn-primary btn-lg' to='/login' role='button'>Login</Link>
            </div>
        </div>
    );
}