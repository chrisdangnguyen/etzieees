// import React from 'react';
// import { withRouter } from 'react-router-dom';
// import NumericInput from 'react-numeric-input';

// class NewCartItem extends React.Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//       product_id: null,
//       quantity: 1
//     }

//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   componentDidMount(){
//     if (this.props.user_id) {
//       this.props.fetchAllCartItems(this.props.user_id)
//     }
//   }

//   componentDidUpdate(){
//     if (this.state.product_id === null){
//       this.setState({product_id: this.props.product_id})
//     }
//   }

//   update(field) {
//     return e => this.setState({
//       [field]: e.currentTarget.value
//     })
//   }

//   handleSubmit(e) {
//     e.preventDefault();
//     if (this.props.cartItem) {
//       let newState = Object.assign({}, this.state);
//       newState.id = this.props.cartItem.id;
//       newState.quantity = parseInt(this.state.quantity) + parseInt(this.props.cartItem.quantity);
//       this.props.updateCartItem(newState).then(() => this.props.history.push(`/cart`)
//       )
//     } else {
//       this.props.createCartItem(this.state).then(() => this.props.history.push(`/cart`))
//     }
//   }

//   render() {
//     return(
//       <div className="cart-form-container">
//         <form className="cart-item-form" onSubmit={this.handleSubmit}>
//           <div className="show-quantity">Quantity
//             <div className="quantity-container">
//               <NumericInput
//                 required
//                 value={this.state.quantity}
//                 id="quantity"
//                 min={1}
//                 max={100}
//                 onChange={this.update('quantity')}
//               />
//             </div>
//           </div>

//           <div className="cart-button-container">

//             <input className="product-to-cart" />
//           </div>
//         </form>
//       </div>
//     )
//   }
// }

// export default withRouter(NewCartItem);
