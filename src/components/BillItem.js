import React, { useState } from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import BillFullScreenModal from './BillFullScreenModal';
import TextField from './TextField';
import StatusTooltip from './StatusTooltip';
import PropTypes from 'prop-types';

export const formatString = (string) => {
  return string.charAt(0).toUpperCase() + string.substring(1);
};

export const formatDate = (date) => {
  return date.split('-').reverse().join('/');
};

const BillItem = (props) => {
  const [isBillFullScreen, setBillFullScreen] = useState(false);
  const { bill } = props;
  const closeModal = () => setBillFullScreen(false);
  const formattedStatus = formatString(bill.status);
  const formattedDate = formatDate(bill.date);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity onPress={() => setBillFullScreen(true)}>
          <Image style={styles.thumbnail} source={{ uri: bill.thumbnailUrl }} />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <TextField heading="Date" text={formattedDate} />
        <TextField heading="Amount" text={`$${bill.amount}`} />
        <View style={styles.row}>
          <TextField heading="Status" text={formattedStatus} />
          <View style={styles.tooltip}>
            <StatusTooltip status={bill.status} />
          </View>
        </View>
      </View>
      <View>
        <BillFullScreenModal
          image={bill.url}
          isBillFullScreen={isBillFullScreen}
          close={closeModal}
        />
      </View>
    </View>
  );
};

export default BillItem;

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 90,
    justifyContent: 'flex-start',
  },
  thumbnail: {
    width: 70,
    height: 70,
  },
  content: {
    justifyContent: 'center',
    padding: 10
  },
  row: {
    flexDirection: 'row',
  },
  tooltip: {
    alignSelf: 'flex-start',
    paddingLeft: 5,
    height: 20,
    width: 30,
  },
});

BillItem.propTypes = {
  bill: PropTypes.object,
};
