import React from 'react';
import { Provider } from 'react-redux';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';

import Modal from './modal/modal';
import NavbarContainer from './navbar/navbar_container';
import CreateProductContainer from './product/create_product_container';
import EditProductContainer from './product/edit_product_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Homepage from './homepage/homepage';
import Footerbar from './footer/footer';
import ProductIndexContainer from './product/product_index_container';
import ProductShowContainer from './product/product_show_container';
import UserShowContainer from './user/user_show_container';
import UserEditContainer from './user/edit_user_container';
// import CartItemIndexContainer from './cart_item/cart_item_index_container';

const App = () => (
    <div>
        <Modal />
        <header>
            <NavbarContainer />
        </header>
        <Switch>
            <ProtectedRoute exact path="/products/new" component={CreateProductContainer} /> 
            <Route exact path="/products/:productId/edit" component={EditProductContainer} />
            <Route exact path="/products/:productId" component={ProductShowContainer} />
            <Route exact path="/products" component={ProductIndexContainer} />
            <Route path="/search" component={ProductIndexContainer} />
            <Route path="/category/:category" component={ProductIndexContainer} />
            <Route path="/cart" />
            <Route exact path="/users/:userId" component={UserShowContainer} />
            <Route exact path="/users/:userId/edit" component={UserEditContainer} />
            <Route exact path="/" component={Homepage} />
        </Switch>
        <footer>
            <Footerbar />
        </footer>
    </div>
);

export default App;