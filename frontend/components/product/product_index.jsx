import React from 'react';
import ProductIndexItem from './product_index_item';


class ProductIndex extends React.Component {
    

    componentDidMount() {
        this.props.action()
    }


    componentDidUpdate(prevProps) {
        if (prevProps.category !== this.props.category) {
            this.props.action()
        }
    }

    render() {

        const {products} = this.props;

        return (
            <div className="product-index-container">
                <ul>
                    {products.map(product => <ProductIndexItem
                                                product={product}
                                                key={product.id}
                                                />
                                )
                    }
                </ul>
            </div>
        )
    }
}

export default ProductIndex;