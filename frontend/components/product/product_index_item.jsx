import React from 'react';
import { Link } from 'react-router-dom';


const ProductIndexItem = ({product, currentUserId, userid, deleteProduct}) => {
    

    return (
      <div className="product-item">
        <Link to={`/products/${product.id}`}>
          <img src={product.photoUrl} className="index-item-image" />
        </Link>

        <div className="product-item-container">
          <div>
            <li className="product-title">{product.title}</li>
            <p id="product-seller">{product.seller.name}</p>
            <li className="product-price">${parseFloat(product.price).toFixed(2)}</li>
          </div>

          {userid !== product.user_id ? null : (
            <div className="">
              <Link
                to={`/products/${product.id}/edit`}
                className="edit-item-link"
              >
                <div className='edit-item-button'>
                  Edit item
                </div>
              </Link>
              <button onClick={() => deleteProduct(product.id)} className="delete-listing-button">
                Delete listing
              </button>
            </div>
          )}
        </div>
      </div>
    );
}

export default ProductIndexItem;