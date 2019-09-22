import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import { CartIcon } from './cart-icon.component';

it('expect to render CartIcon component', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<CartIcon />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
});
