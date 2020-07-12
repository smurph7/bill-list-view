import React from 'react';
import BillFullScreenModal from '../src/components/BillFullScreenModal';
import { TouchableOpacity } from 'react-native';
import renderer from 'react-test-renderer';

jest.mock('@expo/vector-icons', () => {
  const { View } = require('react-native');
  return {
    Ionicons: View,
  };
});

describe('BillFullScreenModal', () => {
  const props = {
    image: 'url',
    isBillFullScreen: false,
    close: jest.fn(),
  };
  
  it('should pass props correctly', () => {
    const tree = renderer.create(<BillFullScreenModal {...props} />);
    expect(tree.root.props).toEqual(props);
  });

  it('should close modal on press close', () => {
    const tree = renderer.create(<BillFullScreenModal {...props} />);
    const close = tree.root.findByType(TouchableOpacity);
    close.props.onPress();
    expect(props.close).toHaveBeenCalled();
  });
});
