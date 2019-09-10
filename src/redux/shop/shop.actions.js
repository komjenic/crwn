import ShopActtionTypes from './shop.types';

export const updateCollections = collectionsMap => ({
    type: ShopActtionTypes.UPDATE_COLLECTIONS,
    payload: collectionsMap
});
