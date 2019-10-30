import React from 'react';
import Test from '../Test';
import renderer from 'react-test-renderer';

test('Link changes the class when hovered', () => {
  const container = renderer.create(<Test />);
    const instance = container.getInstance()
    expect(instance.state.text === "test");
});