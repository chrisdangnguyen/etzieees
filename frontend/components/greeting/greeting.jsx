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
        <div>
            <div className="header-group">
                <h2 className="header-name">Welcome back, {currentUser.name}!</h2>
            </div>

            <div className="dropdown-head">
                <a href="#" onClick={logout} className="logout-btn">Sign out</a>
            </div>
        </div>
    );

    return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;