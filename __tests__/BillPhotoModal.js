import React from 'react';
import BillPhotoModal from '../src/components/BillPhotoModal';
import renderer from 'react-test-renderer';
import { TouchableOpacity } from 'react-native';

jest.mock('@expo/vector-icons', () => {
  const { View } = require('react-native');
  return {
    Ionicons: View,
  };
});

describe('BillPhotoModal', () => {
  const props = {
    image: 'url',
    isBillPhotoModalVisible: false,
    close: jest.fn(),
  };
  it('should pass props correctly', () => {
    const tree = renderer.create(<BillPhotoModal {...props} />);
    expect(tree.root.props).toEqual(props);
  });

  it('should close modal on press close', () => {
    const tree = renderer.create(<BillPhotoModal {...props} />);
    const close = tree.root.findByType(TouchableOpacity);
    close.props.onPress();
    expect(props.close).toHaveBeenCalled();
  });
});
