import React from 'react';
import TextField from '../src/components/TextField';
import renderer from 'react-test-renderer';

jest.mock('@expo/vector-icons', () => {
  const { View } = require('react-native');
  return {
    Ionicons: View,
  };
});

describe('TextField', () => {
  const props = {
    heading: 'Date',
    text: '20/07/2020'
  };

  it('should pass props correctly', () => {
    const tree = renderer.create(<TextField {...props} />);
    expect(tree.root.props).toEqual(props);
  });
});
