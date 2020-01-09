import react from 'react';
import { Link, withRouter} from 'react-router-dom';

class Navbar extends React.Component {
    constructor(props) {
        super(props);

    }


    rightNavbar() {
        return(

            <div className='right-navbar'>
                


                <button id="register" onClick={() => this.props.openModal("signup")}>Register</button>
                <button id="login" onClick={() => this.props.openModal("login")}>Sign in</button>
                <button id="demo" onClick={() => this.handleClick()}>Demo User</button>
                <button onClick={() => this.props.openModal("login")} className="cart">
                    <i className="fa fa-shopping-cart" aria-hidden="true" />
                    <div className="cart-label">Cart</div>
                </button>
            </div>
        )
    }

    render() {
    }
}

export default withRouter(Navbar);