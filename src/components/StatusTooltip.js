import React, { useState } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import Tooltip from 'react-native-walkthrough-tooltip';
import { Ionicons } from '@expo/vector-icons';

const StatusTooltip = () => {
  const [isTooltipVisible, setTooltipVisible] = useState(false);
  return (
    <Tooltip
      isVisible={isTooltipVisible}
      content={<Text>Placeholder text</Text>}
      placement="center"
      onClose={() => {
        setTooltipVisible(false);
      }}
      tooltipStyle={styles.tooltip}
    >
      <TouchableOpacity
        onPress={() => setTooltipVisible(true)}
      >
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
