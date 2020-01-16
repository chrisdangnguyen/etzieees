import React from 'react'


class ProductShow extends React.Component {
    constructor(props) {
        super(props)

    }

    componentDidMount(){
        this.props.fetchProduct(this.props.match.params.productId)
    }


    render(){

        if (!this.props.product) {
            return null;
        }
        return (
            <div>
                <img src="{this.props.product.photoUrl" alt="" />
                <p>{this.props.product.description}</p>
                <div>something is working</div>
            </div> 
        )

    }
        
}


export default ProductShow;