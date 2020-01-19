import React from 'react';
import ProductIndexItem from './product_index_item';


class ProductIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.action()
    }


    render() {

        if (!this.props.products) {
            return null;
        }
        
        // console.log(this.props.products)
        const {products} = this.props;

    


        return (
            <div className="product-index-container">
                <div className="product-list">
                    {products.map(product => <ProductIndexItem
                                                product={product}
                                                key={product.id}
                                                />
                                )
                    }
                </div>
            </div>
        )
    }
}

export default ProductIndex;