import React from 'react';


class ProductShow extends React.Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        this.props.fetchProduct(this.props.match.params.productId)
    }

    // componentDidUpdate(prevProps, prevState) {
    //     if (prevProps.match.params !== this.props.match.params) {
    //         this.props.fetchProduct(this.props.match.params.productId);
    //     }
    // }


    render(){
        const { product, seller } = this.props;
        if (!this.props.product) {
            return null
        }
        return (
            <div className="show-container">
                <div className="show-colum">
                    <div className="show-col-left">
                        <img src={product.photoUrl}/>
                        {/* <li>Where reviews will fall under</li> */}
                    </div>
                    <div className="show-col-right">
                        <div className="product-info">
                            <li>{product.title}</li>
                            <li>${product.price.toFixed(2)}</li>
                            <li>{product.quantity}</li>
                            <button className="product-to-cart">Add to cart</button>
                        </div>
                        <div className="product-description">
                            <div>
                                {product.description}
                            </div>
                            <div>
                                {seller.name}  {/*this might be wrong but need to double check this*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
        )

    }
        
}

export default ProductShow;