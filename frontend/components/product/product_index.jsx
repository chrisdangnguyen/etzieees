import React from 'react';
import {withRouter} from 'react-router-dom';
import ProductIndexItem from './product_index_item';


class ProductIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.action();
    }

    componentDidUpdate(prevProps) {
        if(prevProps.category !== this.props.category) {
            this.props.action();
        }
    }


    render() {

        if (!this.props.products) {
            return null;
        }

        
        let products = this.props.products.map(product => {
            return (
                    <ProductIndexItem
                    product={product}
                    key={product.id}
                    currentUserId={this.props.currentUser.id}
                    userid={this.props.userid} 
                    />
    

                )
            }
            ) ;
            
        if (products.length === 0) {
            products = (
                <div className="no-search-container">
                    <div className="no-search">
                        <div>Looks like we don't have any here
                            <br/> <br/>
                            Try searching for something else instead?
                        </div>
                    </div>
                </div>
            )
        }

        return (
            <div className="product-index-container">
                <div className="product-list">
                    {products}
                </div>
            </div>
        )
    }
}

export default withRouter(ProductIndex);