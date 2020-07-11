import React from 'react';
import App from '../App';
import renderer from 'react-test-renderer';

jest.mock('@expo/vector-icons', () => {
  const { View } = require('react-native');
  return {
    Ionicons: View,
  };
});

it('renders correctly', () => {
  renderer.create(<App />);
});
