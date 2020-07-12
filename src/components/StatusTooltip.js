import React, { useState } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import Tooltip from 'react-native-walkthrough-tooltip';
import { Ionicons } from '@expo/vector-icons';
import { statusTooltips, statusConstants } from '../constants';
import PropTypes from 'prop-types';

export const getTooltipText = (status) => {
  switch (status) {
    case statusConstants.processing:
      return statusTooltips.processing;
    case statusConstants.scheduled:
      return statusTooltips.scheduled;
    case statusConstants.unableToPay:
      return statusTooltips.unableToPay;
    case statusConstants.paid:
      return statusTooltips.paid;
  }
};

const StatusTooltip = (props) => {
  const { status } = props;
  const [isTooltipVisible, setTooltipVisible] = useState(false);
  return (
    <Tooltip
      isVisible={isTooltipVisible}
      content={<Text>{getTooltipText(status)}</Text>}
      placement="center"
      onClose={() => {
        setTooltipVisible(false);
      }}
      tooltipStyle={styles.tooltip}
    >
      <TouchableOpacity onPress={() => setTooltipVisible(true)}>
        <Ionicons name="md-information-circle-outline" size={14} />
      </TouchableOpacity>
    </Tooltip>
  );
};

export default StatusTooltip;

const styles = StyleSheet.create({
  tooltip: {
    width: '100%',
  },
});

StatusTooltip.propTypes = {
  status: PropTypes.string,
};
