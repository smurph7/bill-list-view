import * as React from 'react';
import { shallow } from 'enzyme';
import StatusTooltip from '../src/components/StatusTooltip';
import { TouchableOpacity } from 'react-native';
import Tooltip from 'react-native-walkthrough-tooltip';

jest.mock('@expo/vector-icons', () => {
  const { View } = require('react-native');
  return {
    Ionicons: View,
  };
});
describe('StatusTooltip', () => {
  const setState = jest.fn();
  const useStateMock = () => [false, setState];
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should set isTooltipVisible to true on press', () => {
    jest.spyOn(React, 'useState').mockImplementation(useStateMock);
    const wrapper = shallow(<StatusTooltip />);
    wrapper.find(TouchableOpacity).props().onPress();
    expect(setState).toHaveBeenCalledWith(true);
  });

  it('should set isTooltipVisible to false on close', () => {
    jest.spyOn(React, 'useState').mockImplementation(useStateMock);
    const wrapper = shallow(<StatusTooltip />);
    wrapper.find(Tooltip).props().onClose();
    expect(setState).toHaveBeenCalledWith(false);
  });
});
