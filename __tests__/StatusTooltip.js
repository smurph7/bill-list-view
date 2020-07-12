import * as React from 'react';
import { shallow } from 'enzyme';
import StatusTooltip, { getTooltipText } from '../src/components/StatusTooltip';
import { TouchableOpacity } from 'react-native';
import Tooltip from 'react-native-walkthrough-tooltip';
import { statusTooltips, statusConstants } from '../src/constants';

jest.mock('@expo/vector-icons', () => {
  const { View } = require('react-native');
  return {
    Ionicons: View,
  };
});
describe('StatusTooltip', () => {
  const setState = jest.fn();
  const useStateMock = () => [false, setState];
  const props = {
    status: 'paid',
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

    it('should set isTooltipVisible to true on press', () => {
      jest.spyOn(React, 'useState').mockImplementation(useStateMock);
      const wrapper = shallow(<StatusTooltip {...props} />);
      wrapper.find(TouchableOpacity).props().onPress();
      expect(setState).toHaveBeenCalledWith(true);
    });

    it('should set isTooltipVisible to false on close', () => {
      jest.spyOn(React, 'useState').mockImplementation(useStateMock);
      const wrapper = shallow(<StatusTooltip {...props} />);
      wrapper.find(Tooltip).props().onClose();
      expect(setState).toHaveBeenCalledWith(false);
    });

  it('should return processing status tooltip if bill status is processing', () => {
    expect(getTooltipText(statusConstants.processing)).toEqual(
      statusTooltips.processing
    );
  });

  it('should return scheduled status tooltip if bill status is scheduled', () => {
    expect(getTooltipText(statusConstants.scheduled)).toEqual(
      statusTooltips.scheduled
    );
  });

  it('should return unableToPay status tooltip if bill status is unableToPay', () => {
    expect(getTooltipText(statusConstants.unableToPay)).toEqual(
      statusTooltips.unableToPay
    );
  });

  it('should return paid status tooltip if bill status is paid', () => {
    expect(getTooltipText(statusConstants.paid)).toEqual(
      statusTooltips.paid
    );
  });
});
