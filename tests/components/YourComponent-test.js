import React from 'react';
import tape from 'tape';
import addAssertions from 'extend-tape';
import jsxEquals from 'tape-jsx-equals';
import { createRenderer } from 'react-addons-test-utils';
const test = addAssertions(tape, { jsxEquals });


import YourComponent from '../../src/components/YourComponent.jsx';

test('YourComponent display simple messages properly', (t) => {
    const renderer = createRenderer();

    renderer.render(<YourComponent />);

    t.jsxEquals(
        <header>
            Hello World
        </header>,
        renderer.getRenderOutput(),
        'can render Hello World message'
    );

    t.end();
});
