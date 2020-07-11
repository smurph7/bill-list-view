import React from 'react';
import BillItem, { formatString, formatDate } from '../src/components/BillItem';
import renderer from 'react-test-renderer';

jest.mock('@expo/vector-icons', () => {
  const { View } = require('react-native');
  return {
    Ionicons: View,
  };
});

describe('BillItem', () => {
  const bill = {
    id: '1',
    amount: 20,
    date: '2020-01-20',
    status: 'paid',
    url: 'https://via.placeholder.com/240x320/33FFFA?text=School+Fees',
    thumbnailUrl: 'https://via.placeholder.com/150/33FFFA?text=School+Fees',
  };

  it('should pass bill props correctly', () => {
    const tree = renderer.create(<BillItem bill={bill} />);
    expect(tree.root.props).toEqual({ bill });
  });

  it('should format status to have capital first letter', () => {
    expect(formatString('paid')).toEqual('Paid');
  });

  it('should format date to be dd/mm/yyyy', () => {
    expect(formatDate('2020-06-21')).toEqual('21/06/2020');
  });

  it('should set isBillPhotoModalVisible to true and pass the image url on openImage', () => {
    const tree = renderer.create(<BillItem bill={bill} />);
    const instance = tree.getInstance();
    const image = 'url';
    jest.spyOn(instance, 'setState');
    instance.openImage(image);
    expect(instance.setState).toHaveBeenCalledWith({
      isBillPhotoModalVisible: true,
      image,
    });
  });

  it('should set isBillPhotoModalVisible to false on closeImage', () => {
    const tree = renderer.create(<BillItem bill={bill} />);
    const instance = tree.getInstance();
    jest.spyOn(instance, 'setState');
    instance.closeImage();
    expect(instance.setState).toHaveBeenCalledWith({
      isBillPhotoModalVisible: false,
    });
  });
});
