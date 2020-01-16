import React from 'react';
import Slider from 'react-slick';
import { withRouter } from 'react-router-dom';

class Slideshow extends React.Component {
    render () {
        const setting = {
            dots: true,
            infinite: true,
            speed: 1000,
            autoplaySpeed: 3600,
            slideToShow: 1,
            slideToScroll: 1,
            autoplay: true,
        };

        return (
            <div className="slideshow">
                <Slider {...setting}>
                    <div className="slide-1">

                    </div>
                    <div className="slide-2">

                    </div>
                    <div className="slide-3">

                    </div>
                    <div className="slide-4">

                    </div>
                    <div className="slide-5">

                    </div>
                </Slider>
            </div>
            );
    }
}

export default withRouter(Slideshow);

