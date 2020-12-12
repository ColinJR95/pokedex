import React from 'react';
import { Link } from 'react-router-dom';
import './home.scss'

const home = () => (
    <div className='main measure center'>
        <div className="db fw6 lh-copy f6">
            <h1 className="display-4">Welcome to the Full-Stack PokeDex!</h1>
            <p className="center mw6">This is a super cool PokeDex system with all kinds of functionalities.</p>
            <hr className="f6" />
            <p>Go ahead and login to start!</p>
            <Link style={{textDecoration: 'none'}} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib br-pill" to='/login' role="button">Login</Link>
        </div>
    </div>
);

export default home;