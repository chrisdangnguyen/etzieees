import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Category extends React.Component {
    render() {
        return(
            <div className="categories">
                <Link to="/categories/jewelry&accessories">Jewelry & Accessories</Link>
                <Link to="/categories/clothing&shoes"> Clothing & Shoes</Link>
                <Link to="/categories/home&living">Home & Living</Link>
                <Link to="/categories/wedding&party">Wedding & Party</Link>
                <Link to="/categories/toys&entertainment">Toys & Entertainment</Link>
                <Link to="/categories/art&collectibles">Art & Collectibles</Link>
                <Link to="/categories/craftsupplies">Craft Supplies</Link>
                <Link to="/categories/vintage">Vintage</Link>
                <Link to="/products">View All</Link>
            </div>
        );
    };

};

export default Category; //check withrouter if this is okay to export later when implmenting logic 