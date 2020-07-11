import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export const formatString = (string) => {
  return string.charAt(0).toUpperCase() + string.substring(1);
};

export const formatDate = (date) => {
  return date.split('-').reverse().join('/');
};

const BillItem = (props) => {
  const { bill } = props;
  const formattedStatus = formatString(bill.status);
  const formattedDate = formatDate(bill.date);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image style={styles.thumbnail} source={{ uri: bill.thumbnailUrl }} />
      </View>
      <View style={styles.content}>
        <View style={styles.row}>
          <Text style={styles.heading}>Date </Text>
          <Text>{formattedDate}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.heading}>Amount </Text>
          <Text>${bill.amount}</Text>
        </View>
      </View>
      <View style={styles.content}>
        <View style={styles.row}>
          <Text style={styles.heading}>Status </Text>
          <Text>{formattedStatus}</Text>
        </View>
      </View>
    </View>
  );
};

export default BillItem;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    flexDirection: 'row',
    height: 90,
  },
  thumbnail: {
    width: 70,
    height: 70,
  },
  content: {
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  heading: {
    fontWeight: 'bold',
  },
});