import React from 'react';
import Slideshow from '../slideshow/slideshow';


const homePage = () => {
    return (
        <div className="homepage">
            <h2>If it's handcrafted, vintage, custom, or unique, it's on Etzieees.</h2>
            <Slideshow />
            <div className="homepage-list">
                <li>
                    <h3>
                        <i className="fa fa-check"> </i>
                        Unique everything
                    </h3>
                    <p>We have millions of one-of-a-kind itmes, so you can
                        find whatever you need (or really, really want).
                    </p>
                </li>
                <li>
                    <h3>
                        <i className="fa fa-check"> </i>
                        Independent sellers
                    </h3>
                    <p>Buy directly from someone who put their heart and soul
                        into making something special.
                    </p>
                </li>
                <li>
                    <h3>
                        <i className="fa fa-check"> </i>
                        Secure shopping
                    </h3>
                    <p>We use best-in-class technology to protect your transactions.</p>
                </li>
            </div>
        </div>
    );
}

export default homePage;
 