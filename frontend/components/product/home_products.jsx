import React from 'react';
import { withRouter } from 'react-router-dom';
import ProductIndexItem from '../product/product_index_item';



class HomeProducts extends React.Component {
  constructor(props) {
    super(props)

  }

  componentDidMount() {
    this.props.fetchAllProducts();
  }

  render() {

    // const products = this.props.products;
    if (!this.props.products){
      return null;
    }

    // const { products } = this.props;

    const popularProducts = this.props.products.slice(0,5);
    const otherProducts = this.props.products.slice(5)

    return (
      <div className="home-products-container">

        <div className="popular-products">
          <div className="product-list">
            {popularProducts.map(product => <ProductIndexItem
                                              product={product}
                                              key={product.id}
                                            />
                                )
            }
          </div>
        </div>

        <div className="other-products-container">
            <h1>Design ideas and inspiration</h1>

            <div className="other-products"> 

              <div className="product-list">
                {otherProducts.map(product => <ProductIndexItem
                                                  product={product}
                                                    key={product.id}
                                                />
                                    )
                }
              </div>
            </div>
        </div>

      </div>
    )
  }
}


export default withRouter(HomeProducts);