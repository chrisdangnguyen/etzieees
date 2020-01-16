import React from 'react';
import { Link } from 'react-router-dom';
// import { render } from 'react-dom';
import Category from '../category/category'



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
    const personalNavbar = () => (
        <div className="loggedin-navbar">

            <div className="sell-icon">
                <Link to="/products/new" className="sell-link">
                    Sell on Etzieees
                </Link>
            </div>

            <div className="dropdown-header">
                <img src={window.images.logo} className="profile-logo"/> 

               
               <div className="dropdown-content">
                   <div className="dropdown-profile">
                        <Link to='' className="view-link">
                            <span className="view-profile">
                             View Profile 
                            <i className="fa fa-caret-right" aria-hidden="true"></i> 
                            </span>
                            <span className="first-name"></span>  
                            {/* <img src={window.images.logo} />  */}
                        </Link>
                   </div>
                    <div className="dropdown-head">
                        <a href="#" onClick={logout} className="logout-btn">Sign out</a>
                    </div>
                </div>



            </div> 

            {/* <div className="dropdown-head">
                <a href="#" onClick={logout} className="logout-btn">Sign out</a>
            </div> */}

            <button className="shop-btn-loggedin">
                <i className="fa fa-shopping-cart"></i>
            </button>

        </div>
    );

    const tempSearchBar = (
        <form className="searchbar" action="action_page.php">
            <input type="text" placeholder="Search for items or shops" 
            name="search"/>
                <button type="submit"><i className="fa fa-search"></i></button>
        </form>
    );

    const greeting = currentUser ? personalNavbar() : sessionLinks();

    return(
        <div className="navbar-container">
            <nav className="navbar">
                <div className="nav-header">
                    <div className="navbar-left">
                        <Link to="/" className="header-link">
                            <h1 className="logo-name">Etzieees</h1>
                        </Link>
                        <form className="searchbar" action="action_page.php">
                            <input type="text" placeholder="Search for items or shops"
                                name="search" />
                            <button type="submit" className="searchbutton"><i className="fa fa-search"></i></button>
                        </form>
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