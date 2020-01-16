import React from 'react';


const footerBar = () => {

    return(
        <div className="footer">
            <div className="footer-left">
                <img src={window.images.usFlag} className="flag"/>
                <li> 
                    United States  |  English (US)  |  $(USD) 
                </li>
            </div>
            <div className="footer-right">
                <li >
                    Made by Chris Nguyen
                </li>
                <li>
                    <i className="fa fa-linkedin-square"></i>
                </li>
                <li>
                    <i className="fa fa-github"></i>
                </li>
            </div>


        </div>
    );

}

export default footerBar;