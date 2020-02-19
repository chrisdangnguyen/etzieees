import React from 'react';
import { withRouter } from 'react-router-dom';
import ProductIndexItem from '../product/product_index_item';
// import ProductIndexItem from '../product/product_index_item';


class UserProducts extends React.Component {
  constructor(props) {
    super(props)

  }

  componentDidMount() {
    this.props.fetchUserProducts(this.props.userId)
  }

  render() {

    // if (!this.props.products) return null;

    const userProducts = this.props.products.map(product => {
      if (product.user_id !== this.props.userId) {
        return null;
      }
      return (
        <ProductIndexItem key={product.id} product={product} />
      )
    })

    return(
      <div className="user-product">
        {userProducts}
      </div>
    )
  }
}


export default withRouter(UserProducts);