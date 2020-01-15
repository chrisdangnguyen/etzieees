import React from 'react';
import Slideshow from '../slideshow/slideshow';


const homePage = () => {


    const aboutHome = (
        <div className="about-home">
            <div className="about-home-container">
                <h2>What is Etzieees?</h2>
                <div className="about-list">
                    <li className="home-list-1">
                        <h3>A one-of-a-kind community</h3>
                        <p>Etzieees is a global online markeyplace, where people come 
                            together to make, sell, buy, and collect unique items.
                        </p>
                    </li>
                    <li className="home-list-2">
                        <h3>Support independent creators</h3>
                        <p>There's no Etzieees warehouse - just millions of people 
                            selling the things they love. We make whole process easy,
                            helping connect directly with makers to find something 
                            extraordinary.
                        </p>
                    </li>
                    <li className="home-list-3">
                        <h3>Peace of mind</h3>
                        <p>Your privacy is the highest priority of our dedicated team.
                            And if you ever need assistance, we are always ready to step
                            in for support.
                        </p>
                    </li>

                </div>
                <h4>Have a question? Well, we've got some answers.</h4>
            </div>
        </div>
    );


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
            {aboutHome}
        </div>
    );
}

export default homePage;
 