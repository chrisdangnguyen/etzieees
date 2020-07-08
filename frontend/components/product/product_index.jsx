import React, { useEffect } from 'react';
import {withRouter} from 'react-router-dom';
import ProductIndexItem from './product_index_item';


const ProductIndex = props => {
	
	useEffect(() => {
		props.action()
	}, [props.category])
	
	
	let products = props.products.map(product => {
		return (
			<ProductIndexItem
			product={product}
			key={product.id}
			currentUserId={props.currentUser.id}
			userid={props.userid} 
			deleteProduct={props.deleteProduct}
			/>
			)
		});
		
	if (props.products.length === 0) {
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
	
	if (!props) {
		return null;
	}

	return (
		<div className="product-index-container">
			<div className="product-list">
				{products}
			</div>
		</div>
	)
}

export default withRouter(ProductIndex);