import React from 'react';
import { Link } from 'react-router-dom';
import Category from '../category/category';
import SearchBar from '../search/search_container';



const Navbar = ({ currentUser, logout, openModal }) => {
    const sessionLinks = () => (
        
        <div className="login-signup">
            <button className="signin-m" onClick={() => (openModal('login'))}>
                Sign in
            </button>

            <button className="register-m"onClick={() => (openModal('signup'))}>
                Register
            </button>

            <button className="shop-btn">
                <i className="fa fa-shopping-cart"></i>
            </button>
            
        </div>

    );


    // window.onclick = function (event) {
    //     if (!event.target.matches('.dropdown-header')) {
    //         var dropdowns = document.getElementsByClassName("dropdown-content");
    //         var i;
    //         for (i = 0; i < dropdowns.length; i++) {
    //             var openDropdown = dropdowns[i];
    //             if (openDropdown.classList.contains('show')) {
    //                 openDropdown.classList.remove('show');
    //             }
    //         }
    //     }
    // }


    const personalNavbar = (user) => {
        const preview = currentUser.photoUrl ?
            <img src={currentUser.photoUrl} className="profile-logo" /> : 
            <img src={window.images.logo} className="profile-logo" /> 

        const previewDropdown = currentUser.photoUrl ?
            <img src={currentUser.photoUrl} className="user-dropdown-logo" /> :
            <img src={window.images.logo} className="user-dropdown-logo" />

        return (
            <div className="loggedin-navbar">

                <div className="sell-icon">
                    <Link to="/products/new" className="sell-link">
                        <svg className="shop-icon" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" version="1.1" width="22" height="32" aria-hidden="true" focusable="false">
                            <path d="M21.4958951,12.3901667 L21.4958951,21.4958951 C21.4958951,21.8659618 21.3606805,22.1862069 21.0902472,22.4566402 C20.8198139,22.7270735 20.4995687,22.8622881 20.1295021,22.8622881 L3.73278602,22.8622881 C3.36271939,22.8622881 3.04247423,22.7270735 2.77204093,22.4566402 C2.50160763,22.1862069 2.36639301,21.8659618 2.36639301,21.4958951 L2.36639301,12.3901667 L5.09917903,12.3901667 L5.09917903,16.0303231 L18.7631091,16.0303231 L18.7631091,12.3901667 L21.4958951,12.3901667 Z M22.8622881,7.83196504 C22.8622881,8.58633162 22.5954172,9.23038022 22.0616672,9.76413016 C21.5279173,10.2978801 20.8838687,10.5647511 20.1295021,10.5647511 C19.3751355,10.5647511 18.7310869,10.2978801 18.197337,9.76413016 C17.6635871,9.23038022 17.3967161,8.58633162 17.3967161,7.83196504 C17.3967161,8.58633162 17.1298451,9.23038022 16.5960952,9.76413016 C16.0623453,10.2978801 15.4182967,10.5647511 14.6639301,10.5647511 C13.9095635,10.5647511 13.2655149,10.2978801 12.731765,9.76413016 C12.198015,9.23038022 11.9311441,8.58633162 11.9311441,7.83196504 C11.9311441,8.58633162 11.6642731,9.23038022 11.1305232,9.76413016 C10.5967732,10.2978801 9.95272463,10.5647511 9.19835805,10.5647511 C8.44399147,10.5647511 7.79994287,10.2978801 7.26619294,9.76413016 C6.732443,9.23038022 6.46557203,8.58633162 6.46557203,7.83196504 C6.46557203,8.58633162 6.19870107,9.23038022 5.66495113,9.76413016 C5.13120119,10.2978801 4.4871526,10.5647511 3.73278602,10.5647511 C2.97841944,10.5647511 2.33437084,10.2978801 1.8006209,9.76413016 C1.26687097,9.23038022 1,8.58633162 1,7.83196504 C1,7.3409151 1.1209815,6.88545532 1.36294814,6.46557203 L3.90358514,1.71522134 C4.02456846,1.4946047 4.1918076,1.320249 4.40530758,1.19214902 C4.61880755,1.06404903 4.85009572,1 5.09917903,1 L18.7631091,1 C19.0121924,1 19.2434806,1.06404903 19.4569806,1.19214902 C19.6704805,1.320249 19.8377197,1.4946047 19.958703,1.71522134 L22.49934,6.46557203 C22.7413066,6.88545532 22.8622881,7.3409151 22.8622881,7.83196504 Z"></path>
                        </svg>
                        <p className="shop-text">Sell on Etzieees</p>
                    </Link>
                </div>

                <div className="dropdown-header">
                    {preview}
                    <p className="profile-text">You 
                        <i className="fa fa-caret-down" aria-hidden="true"></i> 
                    </p>
                

                
                    <div className="dropdown-content" id="myDropdown">
                        <div className="dropdown-profile">
                                <Link to={`/users/${currentUser.id}`} className="view-link">
                                    <div className="dropdown-user-img">
                                        {previewDropdown}
                                    </div>
                                    <div className="dropdown-user-info">
                                        <span className="first-name">{currentUser.name}</span> 
                                        <div className="view-profile-button">
                                            <p className="view-profile-text">View Profile</p>
                                        </div> 
                                    </div>
                                </Link>
                        </div>
                        <div className="dropdown-head" href="#" onClick={logout}>
                            <a href="#" onClick={logout} className="logout-btn">Sign out</a>
                        </div>
                    </div>
                </div> 



                <div className="cart-container">
                    <Link to="" className="sell-link">
                        <i className="fa fa-shopping-cart">
                        </i>
                        <p className="cart-text">Cart</p>
                    </Link>
                </div>
                
            </div>
        )
    };

    const greeting = currentUser ? personalNavbar() : sessionLinks();

    return(
        <div className="navbar-container">
            <nav className="navbar">
                <div className="nav-header">
                    <div className="navbar-left">
                        <Link to="/" className="header-link">
                            <h1 className="logo-name">Etzieees</h1>
                        </Link>
                        <SearchBar />
                    </div>
                    <div className="navbar-right">
                        {greeting}
                    </div>
                </div>
            </nav>
            <Category />
        </div>
    );
     
};


export default Navbar;