import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import { connect } from 'react-redux';
import { checkAuthenticated, load_user } from '../actions/auth';

export function Layout(props) {
    const { checkAuthenticated, load_user } = props
    useEffect(() => {
        checkAuthenticated()
        load_user()
    }, [checkAuthenticated, load_user]);

    return (
        <div>
            <Navbar />
            {props.children}
        </div>
    );
}

export default connect(null, { checkAuthenticated, load_user })(Layout);