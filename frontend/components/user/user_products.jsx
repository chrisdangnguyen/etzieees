import React, { useEffect } from 'react';
import { withRouter, Link } from 'react-router-dom';
import ProductIndexItem from '../product/product_index_item';


const UserProducts = props => {

  useEffect(() => {
    props.fetchUserProducts(props.userId)
  }, [props.userId])

  const userProducts = props.products.map((product) => {
    if (product.user_id !== props.userId) {
      return null;
    }
    return (
      <div key={product.id}>
        <ProductIndexItem key={product.id} product={product} user={props.userId} userid={props.userid}
        deleteProduct={props.deleteProduct} />
      </div>
    )
  })

  return(
    <div className="user-products">
      <ul className="product-list">
        {userProducts}
      </ul>
    </div>
  )
}


export default withRouter(UserProducts);