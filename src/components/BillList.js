import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { maxNumberOfBillsToRender } from '../constants';
import BillItem from './BillItem';
import { getBills } from '../../Services';

export default class BillList extends React.Component {
  state = { bills: [] };

  componentDidMount() {
    this.getBills();
  }

  getBills = async () => {
    const bills = await getBills();
    this.setState({ bills });
  };

  sortBills = (bills) => {
    return bills.sort((a, b) => new Date(b.date) - new Date(a.date));
  };

  renderItem = ({ item }) => <BillItem bill={item} />;

  renderSeparator = () => <View style={styles.itemSeparator} />;

  render() {
    const { bills } = this.state;
    const sortedBills = this.sortBills(bills);
    return (
      <FlatList
        data={sortedBills}
        keyExtractor={(item) => item.id.toString()}
        renderItem={this.renderItem}
        initialNumToRender={maxNumberOfBillsToRender}
        maxToRenderPerBatch={maxNumberOfBillsToRender}
        ItemSeparatorComponent={this.renderSeparator}
        ListFooterComponent={this.renderSeparator}
      />
    );
  }
}

const styles = StyleSheet.create({
  itemSeparator: {
    padding: 1,
  },
});
