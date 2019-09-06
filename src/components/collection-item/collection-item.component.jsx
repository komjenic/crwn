import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions.js';

import {
    ColectionItemContainer,
    BackgroundImage,
    AddButton,
    CollectionFooterContainer,
    NameConteiner,
    PriceConteiner
} from './collection-item.styles';

const CollectionItem = ({ item, addItem }) => {
    const { imageUrl, name, price } = item;
    return (
        <ColectionItemContainer>
            <BackgroundImage imageUrl={imageUrl} />
            <CollectionFooterContainer>
                <NameConteiner>{name}</NameConteiner>
                <PriceConteiner>${price}</PriceConteiner>
            </CollectionFooterContainer>
            <AddButton onClick={() => addItem(item)} inverted>
                Add to cart
            </AddButton>
        </ColectionItemContainer>
    );
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(
    null,
    mapDispatchToProps
)(CollectionItem);
