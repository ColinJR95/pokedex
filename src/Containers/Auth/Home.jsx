import React from 'react';
import { Link } from 'react-router-dom';

const home = () => (
    <div className='container flex'>
        <div className="jumbotron mt-5">
            <h1 className="display-4">Welcome to the Full-Stack PokeDex!</h1>
            <p className="lead">This is a super cool PokeDex system with all kinds of functionalities.</p>
            <hr className="my-4" />
            <p>Go ahead and login to start!</p>
            <Link className="btn btn-primary btn-lg" to='/login' role="button">Login</Link>
        </div>
    </div>
);

export default home;