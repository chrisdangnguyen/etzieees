import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import NumericInput from "react-numeric-input";
// import NewCartItem from '../cart_item/new_cart_item_container';



class ProductShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          product_id: this.props.match.params.productId,
          quantity: 1
        };

        this.handleChange = this.handleChange.bind(this)
        this.handleAddToCart = this.handleAddToCart.bind(this);
    }

    componentDidMount() {
        this.props.fetchProduct(this.props.match.params.productId)
    }

    componentDidUpdate(prevProps) {
      if (this.props.match.params.productId !== prevProps.match.params.productId) {
        this.props.fetchProduct(this.props.match.params.productId);
      }
    }

    handleChange(e) {
      this.setState({quantity: e})
    }


    handleAddToCart(e) {
      e.preventDefault();
      this.props.addCartItem(this.state)
      // this.props.history.push('/cart_items');
    }

    handleChange(e) {
        this.setState({ quantity: e });
    }


    render(){
        const { product, userId } = this.props;
        if (!this.props.product) {
            return null
        }

      const cartButton = userId === product.user_id
        ? ''
        : < button className="product-to-cart" onClick={this.handleAddToCart}>Add to cart</button>;

        return (
          <div className="show-container">
            <div className="show-column">
              <div className="show-col-left">
                <img src={product.photoUrl} className="show-photo" />
                <div className="show-item-review">
                  <p>Reviews</p>
                </div>
              </div>

              <div className="show-col-right">
                <div className="product-info">
                  <Link
                    to={`/users/${product.user_id}`}
                    className="show-user-name"
                  >
                    {product.seller.name}
                  </Link>
                  <h2 className="show-title">{product.title}</h2>
                  <h3 className="show-price">${parseFloat(product.price).toFixed(2)}</h3>

                <div className="show-quantity">Quantity
                    <div className="quantity-container">
                        <NumericInput
                            required
                            value={this.state.quantity}
                            id="quantity"
                            min={1}
                            max={product.quantity}
                            onChange={this.handleChange}
                        />
                    </div>
                </div>
                    <div className="cart-button-container">
                      {cartButton}
                    </div>
                </div>

                <div className="product-description">
                  <div className="show-description">{product.description}</div>
                </div>

              </div>
            </div>
          </div>
        );

    }
        
}

export default withRouter(ProductShow);