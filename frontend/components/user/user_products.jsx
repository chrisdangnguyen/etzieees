import React from 'react';
import { withRouter, Link } from 'react-router-dom';
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

    const userProducts = this.props.products.map((product, i) => {
      if (product.user_id !== this.props.userId) {
        return null;
      }
      return (
        <div key={product.id}>
          <ProductIndexItem key={product.id} product={product} user={this.props.userId} userid={this.props.userid} />
        </div>
      )
    })

    // const finalProducts = userProducts.map( product => {
    //   if (product.seller.id === this.props.userId)

    // })

    return(
      <div className="user-products">
        <ul className="product-list">
          {userProducts}
        </ul>
      </div>
    )
  }
}


export default withRouter(UserProducts);