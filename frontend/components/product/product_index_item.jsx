import React from 'react';
import { Link } from 'react-router-dom';


const ProductIndexItem = ({product}) => {
    return (
        <div className="product-item">
                <Link to={`/products/${product.id}`}>
                    <img src={product.photoUrl}/>
                </Link>
                <li className="product-title">
                    {product.title}
                </li>   
                <li className="product-price">
                    ${product.price.toFixed(2)}
                </li>
        </div>
    )
}

export default ProductIndexItem;