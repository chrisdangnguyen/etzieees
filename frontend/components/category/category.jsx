import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Category extends React.Component {
    render() {
        return(
            <div className="categories">
                <Link to="">Jewelry & Accessories</Link>
                <Link to=""> Clothing & Shoes</Link>
                <Link to="">Home & Living</Link>
                <Link to="">Wedding & Party</Link>
                <a href="https://www.google.com/">Google</a> {/* <Link to="">Toys & Entertainment</Link> */}
                <Link to="">Art & Collectibles</Link>
                <Link to="">Craft Supplies</Link>
                <Link to="">Vintage</Link>
                <Link to="">Gifts</Link>
            </div>
        );
    };

};

export default Category; //check withrouter if this is okay to export later when implmenting logic 