import * as React from 'react';
import { shallow } from 'enzyme';
import { TouchableOpacity } from 'react-native';
import BillItem, { formatString, formatDate } from '../src/components/BillItem';
import BillFullScreenModal from '../src/components/BillFullScreenModal';

jest.mock('@expo/vector-icons', () => {
  const { View } = require('react-native');
  return {
    Ionicons: View,
  };
});

describe('BillItem', () => {
  const setState = jest.fn();
  const useStateMock = () => [false, setState];
  const bill = {
    id: '1',
    amount: 20,
    date: '2020-01-20',
    status: 'paid',
    url: 'https://via.placeholder.com/240x320/33FFFA?text=School+Fees',
    thumbnailUrl: 'https://via.placeholder.com/150/33FFFA?text=School+Fees',
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should format status to have capital first letter', () => {
    expect(formatString('paid')).toEqual('Paid');
  });

  it('should format date to be dd/mm/yyyy', () => {
    expect(formatDate('2020-06-21')).toEqual('21/06/2020');
  });

  it('should set isBillFullScreen to true on press thumbnail', () => {
    jest.spyOn(React, 'useState').mockImplementation(useStateMock);
    const wrapper = shallow(<BillItem bill={bill} />);
    wrapper.find(TouchableOpacity).props().onPress();
    expect(setState).toHaveBeenCalledWith(true);
  });

  it('should set isBillFullScreen to false on press close modal', () => {
    jest.spyOn(React, 'useState').mockImplementation(useStateMock);
    const wrapper = shallow(<BillItem bill={bill} />);
    wrapper.find(BillFullScreenModal).props().close();
    expect(setState).toHaveBeenCalledWith(false);
  });
});
