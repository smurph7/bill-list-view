import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { maxNumberOfBillsToRender } from '../constants';

const bills = [
  {
    id: '1',
    amount: 20,
    date: '2020-01-20',
    status: 'paid',
  },
  {
    id: '2',
    amount: 200,
    date: '2020-02-02',
    status: 'paid',
  },
];

const renderItem = ({ item }) => (
  <View style={{ borderWidth: 1 }}>
    <Text>Bill</Text>
    <Text>${item.amount}</Text>
    <Text>{item.date}</Text>
    <Text>{item.status}</Text>
  </View>
);

const renderSeparator = () => <View style={styles.itemSeparator} />;

const BillList = () => {
  return (
    <View style={styles.flatList}>
      <FlatList
        data={bills}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ItemSeparatorComponent={renderSeparator}
        initialNumToRender={maxNumberOfBillsToRender}
        maxToRenderPerBatch={maxNumberOfBillsToRender}
      />
    </View>
  );
};

export default BillList;

const styles = StyleSheet.create({
  flatList: {
    width: '100%',
  },
  itemSeparator: {
    padding: 1,
  },
});
