import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import { CartDropdown } from './cart-dropdown.component';

it('expect to render CartDropdown component', () => {
    const cartItem = { cartItems: [] };
    const renderer = new ShallowRenderer();
    renderer.render(<CartDropdown {...cartItem} />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
});
