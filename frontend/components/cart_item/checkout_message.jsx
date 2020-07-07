import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const CheckoutMessage = props => {
  return (
    <div className="checkout-container">
        <div className="checkout-message">
          <h2 className="message">Thank you for your purchase on</h2>
          <h2 className="checkout-title">Etzieees</h2>

          <p>Come shop again soon!</p>
          <Link to="/" onClick={props.closeModal} className="checkout-link">
            Back to home
          </Link>
        </div>
    </div>
  )
}


export default withRouter(CheckoutMessage);