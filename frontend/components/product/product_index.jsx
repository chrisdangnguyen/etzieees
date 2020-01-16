import React from 'react';
import ProductIndexItem from './product_index_container';


class ProductIndex extends React.Component {
    componentDidMount() {

        console.log(this.props);
    }

    render() {
        const { products } = this.props;

        return (
            <div>
                <li>
                    {products.map( product => <ProductIndexItem 
                                                product={product}
                                                key={product.id}
                                                />
                                )
                    }
                </li>
                <div>Darryl is sooooooooooooooooo oh yeahhhhh
                     </div>
            </div>
        );
    }
}

export default ProductIndex;