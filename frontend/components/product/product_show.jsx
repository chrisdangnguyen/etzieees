import React from 'react';
import { Link } from 'react-router-dom';
import NumericInput from "react-numeric-input";



class ProductShow extends React.Component {
    constructor(props) {
        super(props)
        // this.state = {
        //   product_id: this.props.match.params.productId,
        //   quantity: 1
        // };

        // this.handleChange = this.handleChange.bind(this)

    }

    componentDidMount() {
        this.props.fetchProduct(this.props.match.params.productId)
    }

    // componentDidUpdate(prevProps) {
    //     if (prevProps.product.id != this.props.match.params.productId) {
    //         this.props.fetchProduct(this.props.match.params.productId)
    //     }

    //     if (this.props.product.user_id != this.props.seller.id) {
    //         this.props.fetchUser(this.props.product.seller.id)
    //     }

    // }


    // handleChange(event) {
    //     this.setState({ quantity: event });
    // }


    render(){
        const { product, seller } = this.props;
        if (!this.props.product) {
            return null
        }

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
                            // value={this.state.quantity}
                            id="quantity"
                            min={1}
                            max={product.quantity}
                            // onChange={this.handleChange}
                        />
                    </div>
                </div>
                    <div className="cart-button-container">

                        <button className="product-to-cart">Add to cart</button>
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

export default ProductShow;