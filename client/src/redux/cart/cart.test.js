import cartReducer from './cart.reducer';

it('should return the initial state', () => {
    expect(cartReducer(undefined, {})).toEqual({ cartItems: [], hidden: true });
});
