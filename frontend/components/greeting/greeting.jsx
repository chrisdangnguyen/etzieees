import React from 'react';
import { Link } from 'react-router-dom';



const Greeting = ({ currentUser, logout, openModal }) => {
    const sessionLinks = () => (
        <div className="login-signup">
            <button className="signin-m" onClick={() => (openModal('login'))}>
                Sign in
            </button>

            <button className="register-m"onClick={() => (openModal('signup'))}>
                Register
            </button>
        </div>
    );
    const personalGreeting = () => (
        <hgroup className="header-group">
            <h2 className="header-name">Welcome back, {currentUser.name}!</h2>
            <button className="header-button" onClick={logout}>Sign Out</button>
        </hgroup>
    );

    return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;