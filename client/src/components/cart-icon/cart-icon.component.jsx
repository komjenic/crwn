import React from 'react';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors.js';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { toggleCartHidden } from '../../redux/cart/cart.actions.js';

import {
    CartIconContainer,
    ShoppingIconContainer,
    ItemCountContainer
} from './cart-icon.styles';

export const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <CartIconContainer onClick={toggleCartHidden}>
        <ShoppingIconContainer />
        <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartIconContainer>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CartIcon);
