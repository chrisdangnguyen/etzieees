import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Category extends React.Component {
    render() {
        return(
            <div className="categories">
                <Link to="/category/jewelry&accessories">Jewelry & Accessories</Link>
                <Link to="/category/clothing&shoes"> Clothing & Shoes</Link>
                <Link to="/category/home&living">Home & Living</Link>
                <Link to="/category/wedding&party">Wedding & Party</Link>
                <Link to="/category/toys&entertainment">Toys & Entertainment</Link>
                <Link to="/category/art&collectibles">Art & Collectibles</Link>
                <Link to="/category/craftsupplies">Craft Supplies</Link>
                <Link to="/category/vintage">Vintage</Link>
                <Link to="/products">View All</Link>
            </div>
        );
    };

};

export default withRouter(Category); //check withrouter if this is okay to export later when implmenting logic 