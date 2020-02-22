import React from 'react';
import { Link } from 'react-router-dom';


const ProductIndexItem = ({product}) => {
    
    // if (!product) {
    //     return null;
    // }
    
    return (
        <div className="product-item">
                <Link to={`/products/${product.id}`}>
                    <img src={product.photoUrl} className="index-item-image"/>
                </Link>
                <li className="product-title">
                    {product.title}
                </li>   
                <p id="product-seller">{product.seller.name}</p>
                <li className="product-price">
                    ${product.price.toFixed(2)}
                </li>
        </div>
    )
}

export default ProductIndexItem;